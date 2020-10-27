<?php

namespace App\Http\Controllers;

use App\User;
use App\Price;
use App\Booking;
use App\Customer;
use App\Jobs\SendEmailJob;
use Illuminate\Support\Str;
use Cartalyst\Stripe\Stripe;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Cartalyst\Stripe\Exception\NotFoundException;

use Cartalyst\Stripe\Exception\CardErrorException;
use App\Notifications\BookingSubmittedNotification;
use Cartalyst\Stripe\Exception\BadRequestException;
use App\Http\Controllers\Traits\BookingInvoiceTrait;
use Cartalyst\Stripe\Exception\ServerErrorException;
use Cartalyst\Stripe\Exception\UnauthorizedException;
use Cartalyst\Stripe\Exception\InvalidRequestException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BookingController extends Controller
{
    use BookingInvoiceTrait;

    public function getPrice(Request $request)
    {
        $getPrice = Price::find($request['price_id']);
        return response()->json($getPrice->price, 200);
    }

    /*
    *  Creating a booking
    */
    public function create(Request $request)
    {
        $checkExistingUser = Customer::where('email', $request['email'])->first();

        // * If user isn't exists 
        if (!empty($checkExistingUser)) {

            $booking = Booking::create([
                'customer_id' => $checkExistingUser->id,
                'mobile' => $request['mobile'],

                'from' => $request['from'],
                'via' => $request['via'],
                'to' => $request['to'],
                'journey_date' => $request['journey_date'],
                'journey_type' => $request['journey_type'],

                'passengers' => $request['passengers'],
                'luggage' => $request['luggage'],
                'discount' => $request['discount'],
                'total_price' => $request['total_price'],
                // 'passport' => $request['passport'],
                'flight_number' => $request['flight_number'],
                'flight_origin' => $request['flight_origin'],
                'vehicle_id' => $request['vehicle_id'],
                'booking_status_id' => 1,
            ]);
        } else {

            //  * Creating a account for guest user
            $guest = Customer::create([
                'name' => $request['name'],
                // 'name' => 'Sezan',
                'email' => $request['email'],
                'mobile' => $request['mobile'],
                'password' => Hash::make(Str::random(8)),
                'status' => 0,
            ]);

            $booking = Booking::create([
                'customer_id' => $guest->id,
                'mobile' => $guest->mobile,

                'from' => $request['from'],
                'via' => $request['via'],
                'to' => $request['to'],
                'journey_date' => $request['journey_date'],
                'journey_type' => $request['journey_type'],

                'passengers' => $request['passengers'],
                'luggage' => $request['luggage'],
                'discount' => $request['discount'],
                'total_price' => $request['total_price'],
                // 'passport' => $request['passport'],
                'flight_number' => $request['flight_number'],
                'flight_origin' => $request['flight_origin'],
                'vehicle_id' => $request['vehicle_id'],
                'booking_status_id' => 1,
            ]);
        }

        return response()->json(["bookingId" => $booking->id], 200);
    }

    /*
    * Send email after booking submission
    */
    public function sendEmail($booking)
    {
        SendEmailJob::dispatch($booking, $this->saveInvoice($booking));
        return response()->json('Email send', 200);
    }

    /*
    * Saving a temporary PDF to storage
    * so that we can attach this PDF to email
    */
    public function savePDF($booking)
    {
        if (isset($booking)) {
            $data = $this->setPDF($booking);
        }

        $pdf = PDF::loadView('pdf-template.booking-summery', compact('data'));

        $pdfFileName = "booking invoice " . uniqid() . ".pdf";
        Storage::put('public/pdf/' . $pdfFileName, $pdf->output());
        return $pdfFileName;
    }

    /*
    * Download PDF after booking submission
    */
    public function downloadPDF(Request $request)
    {
        $booking = Booking::find($request->id);
        if (!empty($booking) && $booking->customer->email == $request->email) {
            return $this->downloadInvoice($booking->id);
        }
    }

    /*
    * Stripe Payment Intent
    */
    public function stripePaymentIntent(Request $request)
    {
        try {
            $booking = Booking::findOrFail($request->bookingId);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message' => 'Model not found'], 404);
        }
        try {
            $stripe = Stripe::make(getenv("STRIPE_SECRET_KEY"), getenv("STRIPE_API_VERSION"));

            $paymentIntent = $stripe->paymentIntents()->create([
                'amount' => $booking->total_price,
                'currency' => 'GBP',
                'receipt_email' => $request->receipt_email,
                'payment_method_types' => [
                    'card',
                ],
                'metadata' => [
                    'booking_Id' => $booking->id,
                ],
            ]);

            return response()->json(['client_secret' => $paymentIntent['client_secret']], 200);
        } catch (CardErrorException $e) {
            // Get the error message returned by Stripe
            return $e->getMessage();
        } catch (NotFoundException $e) {
            return $e->getMessage();
        } catch (ServerErrorException $e) {
            return $e->getMessage();
        } catch (UnauthorizedException $e) {
            return $e->getMessage();
        } catch (BadRequestException $e) {
            return $e->getMessage();
        } catch (InvalidRequestException $e) {
            return $e->getMessage();
        } catch (UnauthorizedException $e) {
            return $e->getMessage();
        }
    }

    /*
    * Update booking status after a successful payment
    */
    public function confirmPayment(Request $request)
    {
        try {
            $booking = Booking::findOrFail($request->bookingId);
            $booking->booking_status_id = 2;
            $booking->stripe_payment_intent_id = $request->paymentIntentId;
            $booking->save();

            //  * Sending an email
            $this->sendEmail($booking);

            $users = User::all();
            foreach ($users as $user) {
                $user->notify(new BookingSubmittedNotification($booking->id));
            }

            return response()->json([
                'data_updated' => 'booking status updated'
            ], 200);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['error' => 'Model not found'], 404);
        }
    }

    /*
    * Search Booking for "Manage Booking"
    */
    public function searchBooking(Request $request)
    {
        $booking = Booking::find($request->bookingId);

        if (!empty($booking) && $booking->customer->email == $request->email) {

            if ($booking->updated_at != null || $booking->journey_date <= today() || $booking->booking_status_id != 2) {
                return response()->json(
                    [
                        'message' => "Sorry you can't not edit this booking right now.",
                        'booking' => $booking
                    ],
                    403
                );
            }

            return response()->json([
                'booking' => $booking
            ], 200);
        } else {
            return response()->json(['message' => 'Booking not found'], 404);
        }
    }

    /*
    * Update booking for "Manage Booking"
    */
    public function updateBooking(Request $request)
    {
        $booking = Booking::find($request->bookingId);

        if (empty($booking)) {
            return response()->json(['message' => 'Booking not found.'], 404);
        }

        if ($booking->updated_at != null || $booking->journey_date <= today() || $booking->booking_status_id != 2) {
            return response()->json(
                [
                    'message' => "Sorry you can't not edit this booking right now.",
                    'booking' => $booking
                ],
                403
            );
        }

        $date = now()->addDays(1);

        $request->validate([
            "journey_date" => 'required|date|after:' . $date
        ]);

        $booking->journey_date = $request->journey_date;
        $booking->updated_at = now();
        $booking->save();

        return response()->json(['message' => 'Date of journey changes saved successfully.'], 200);
    }
}
