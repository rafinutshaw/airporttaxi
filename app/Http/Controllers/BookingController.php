<?php

namespace App\Http\Controllers;

use App\Price;
use App\Booking;
use App\Customer;
use Carbon\Carbon;
use App\BookingStatus;
use App\Jobs\SendEmailJob;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Mail\BookingSubmitted;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class BookingController extends Controller
{
    public function getPrice(Request $request)
    {
        $getPrice = Price::find($request['price_id']);
        return response()->json($getPrice->price, 200);
    }

    /**
    //  *  Creating a booking
     */
    public function create(Request $request)
    {
        $checkExistingUser = Customer::where('email', $request['email'])->first();

        // * If user isn't exists 
        if (!empty($checkExistingUser)) {

            $booking = Booking::create([
                'customer_id' => $checkExistingUser->id,
                'name' => $checkExistingUser->name,
                'mobile' => $request['mobile'],

                'from' => $request['from'],
                'via' => $request['via'],
                'to' => $request['to'],
                'journey_date' => $request['journey_date'],

                'returnFrom' => $request['returnFrom'],
                'returnVia' => $request['returnVia'],
                'returnTo' => $request['returnTo'],

                'passengers' => $request['passengers'],
                'luggage' => $request['luggage'],
                // 'coupon_id' => $request['coupon_id'],
                'discount' => $request['discount'],
                'total_price' => $request['total_price'],
                'passport' => $request['passport'],
                'flight_number' => $request['flight_number'],
                'flight_origin' => $request['flight_origin'],
                'meet_and_greet_service' => $request['meet_and_greet_service'],
                'booking_status_id' => 1,
            ]);

            //  * Sending an email
            $this->sendEmail($booking);

            return response()->json(["bookingId" => $booking->id], 200);
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
                'name' => $guest->name,
                'mobile' => $guest->mobile,

                'from' => $request['from'],
                'via' => $request['via'],
                'to' => $request['to'],
                'journey_date' => $request['journey_date'],

                'returnFrom' => $request['returnFrom'],
                'returnVia' => $request['returnVia'],
                'returnTo' => $request['returnTo'],

                'passengers' => $request['passengers'],
                'luggage' => $request['luggage'],
                'discount' => $request['discount'],
                'total_price' => $request['total_price'],
                'passport' => $request['passport'],
                'flight_number' => $request['flight_number'],
                'flight_origin' => $request['flight_origin'],
                'meet_and_greet_service' => $request['meet_and_greet_service'],
                'booking_status_id' => 1,
            ]);

            //  * Sending an email
            $this->sendEmail($booking);

            return response()->json(["bookingId" => $booking->id], 200);
        }
    }

    /**
    //  * Send email after booking submission
     */
    public function sendEmail($booking)
    {
        $attachedPDF = $this->savePDF($booking);
        SendEmailJob::dispatch($booking, $attachedPDF);

        return response()->json('Email send', 200);
    }

    /**
    //  * Saving a temporary PDF to storage
    //  * so that we can attach this PDF to email
     */
    public function savePDF($booking)
    {
        if (isset($booking)) {
            $data = $this->setPDF($booking);
        }

        $pdf = PDF::loadView(
            'pdf-template.booking-summery',
            compact('data')
        );

        $pdfFileName = "booking invoice " . $booking->id . ".pdf";
        Storage::put('public/pdf/' . $pdfFileName, $pdf->output());
        return $pdfFileName;
    }

    /**
    //  * Download PDF after booking submission
     */
    public function downloadPDF(Request $request)
    {
        $booking = Booking::find($request->id);
        if (isset($booking) && $booking->customer->email == $request->email) {
            $data = $this->setPDF($booking);
            $pdf = PDF::loadView('pdf-template.booking-summery', compact('data'));
            return $pdf->download('booking-summery.pdf');
        }
    }

    private function setPDF($booking)
    {
        $data = [
            'name' => $booking->name,
            'mobile' => $booking->mobile,
            'email' => $booking->customer->email,
            'invoiceNo' => $booking->id,
            'dateOfInvoice' => $booking->journey_date,
            'from' => $booking->from,
            'via' => $booking->via,
            'to' => $booking->to,
            'returnFrom' => $booking->returnFrom,
            'returnTo' => $booking->returnTo,
            'returnVia' => $booking->returnVia,
            'journeyDate' => $booking->journey_date,
            'passengers' => $booking->passengers,
            'luggage' => $booking->luggage,
            'totalPrice' => $booking->total_price,
        ];
        return $data;
    }
}
