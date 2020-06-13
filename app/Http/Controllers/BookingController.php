<?php

namespace App\Http\Controllers;

use App\Booking;
use App\Customer;
use App\Price;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class BookingController extends Controller
{
    // public function registerGuestUser(array $data)
    // {
    //     $guest = Customer::create([
    //         'name' => $data['name'],
    //         'email' => $data['email'],
    //         'mobile' => $data['mobile'],
    //         'password' => Hash::make(Str::random(8)),
    //         'status' => 0,
    //     ]);

    //     return $guest;
    // }

    public function getPrice(Request $request)
    {
        $getPrice = Price::find($request['price_id']);
        return response()->json($getPrice->price, 200);
    }

    public function guestBooking(Request $request)
    {
        $checkExistingUser = Customer::where('email', $request['email'])->first();

        if (!empty($checkExistingUser)) {
            $booking = Booking::create([
                'customer_id' => $checkExistingUser->id,
                'name' => $checkExistingUser->name,
                'mobile' => $checkExistingUser->mobile,

                'from' => $request['from'],
                'via' => $request['via'],
                'to' => $request['to'],
                'journey_date' => $request['journey_date'],
                'passengers' => $request['passengers'],
                'luggage' => $request['luggage'],
                // 'coupon_id' => $request['coupon_id'],
                'price_id' => $request['price_id'],
                'discount' => $request['discount'],
                'total_price' => $request['total_price'],
                'passport' => $request['passport'],
                'flight_number' => $request['flight_number'],
                'flight_origin' => $request['flight_origin'],
                'meet_and_greet_service' => $request['meet_and_greet_service'],
                'booking_status_id' => 1,
            ]);

            return response()->json("Your Booking is submitted! Thank you!", 200);
        } else {
            $guest = Customer::create([
                'name' => $request['name'],
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
                'passengers' => $request['passengers'],
                'luggage' => $request['luggage'],
                // 'coupon_id' => $request['coupon_id'],
                'price_id' => $request['price_id'],
                'discount' => $request['discount'],
                'total_price' => $request['total_price'],
                'passport' => $request['passport'],
                'flight_number' => $request['flight_number'],
                'flight_origin' => $request['flight_origin'],
                'meet_and_greet_service' => $request['meet_and_greet_service'],
                'booking_status_id' => 1,
            ]);
            return response()->json("Your Booking is submitted! Thank you!", 200);
        }
    }
}
