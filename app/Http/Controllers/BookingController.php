<?php

namespace App\Http\Controllers;

use App\Price;
use App\Booking;
use App\Customer;
use Carbon\Carbon;
use App\BookingStatus;
use App\Http\Controllers\Traits\BookingInvoiceTrait;
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
    use BookingInvoiceTrait;

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
                'passport' => $request['passport'],
                'flight_number' => $request['flight_number'],
                'flight_origin' => $request['flight_origin'],
                'vehicle_id' => $request['vehicle_id'],
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
                'passport' => $request['passport'],
                'flight_number' => $request['flight_number'],
                'flight_origin' => $request['flight_origin'],
                'vehicle_id' => $request['vehicle_id'],
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
        SendEmailJob::dispatch($booking, $this->saveInvoice($booking));
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

        $pdf = PDF::loadView('pdf-template.booking-summery', compact('data'));

        $pdfFileName = "booking invoice " . uniqid() . ".pdf";
        Storage::put('public/pdf/' . $pdfFileName, $pdf->output());
        return $pdfFileName;
    }

    /**
    //  * Download PDF after booking submission
     */
    public function downloadPDF(Request $request)
    {
        $booking = Booking::find($request->id);
        if (!empty($booking) && $booking->customer->email == $request->email) {
            return $this->downloadInvoice($booking->id);
        }
    }
}
