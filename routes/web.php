<?php

use App\Price;
use App\Booking;
use Carbon\Carbon;

use Illuminate\Http\Request;
use App\Mail\WelcomeCustomer;
use App\Vehicle;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/pdf', function () {
//     $data = [
//         'name' => 'sezan',
//         'mobile' => '01687407370',
//         'email' => 'sezansarker@gmail.com',
//         'invoiceNo' => 123,
//         'dateOfInvoice' => Carbon::now()->format('d-m-Y'),
//         'from' => 'London Airport',
//         'via' => '221B Baker Street',
//         'to' => 'Liverpool Airport',
//         'returnFrom' => 'Liverpool Airport',
//         'returnTo' => 'London Airport',
//         'returnVia' => 'Liverpool Stadium',
//         'journeyDate' => Carbon::now()->format('d-m-Y'),
//         'passengers' => 2,
//         'luggage' => 'Hand Luggage',
//         'totalPrice' => 530.52,
//     ];
//     // return view('pdf-template.booking-summery', compact('data'));
//     $pdf = PDF::loadView('pdf-template.booking-summery', compact('data'));
//     // return $pdf->stream();
//     return $pdf->download('booking-summery.pdf');
// });

// Route::post('/download-PDF', function (Request $request) {
//     // return $request;

//     $booking = Booking::find($request->id);
//     if (isset($booking)) {
//         if ($booking->customer->email == $request->email) {
//             $data = [
//                 'name' => $booking->name,
//                 'mobile' => $booking->mobile,
//                 'email' => $booking->customer->email,
//                 'invoiceNo' => $booking->id,
//                 'dateOfInvoice' => $booking->journey_date,
//                 'from' => $booking->from,
//                 'via' => $booking->via,
//                 'to' => $booking->to,
//                 'returnFrom' => $booking->returnFrom,
//                 'returnTo' => $booking->returnTo,
//                 'returnVia' => $booking->returnVia,
//                 'journeyDate' => $booking->journey_date,
//                 'passengers' => $booking->passengers,
//                 'luggage' => $booking->luggage,
//                 'totalPrice' => $booking->total_price,
//             ];

//             $pdf = PDF::loadView('pdf-template.booking-summery', compact('data'));
//             // return $pdf->stream();
//             return $pdf->download('booking-summery.pdf');
//         }
//     }
// });

Route::get('/', function () {
    return view('layouts.master');
});
Auth::routes();

Route::get('/price-list', function () {
    $prices = Vehicle::all(['id', 'type', 'price', 'max_passengers', 'luggage', 'image']);

    return response()->json($prices, 200);
});

Route::post('/send-email', 'BookingController@sendEmail')->name('send-email');

Route::post('/download-PDF', 'BookingController@downloadPDF')->name('download-pdf');

Route::post('get-price/', 'BookingController@getPrice')->name('get-price');

Route::post('/submit-booking', 'BookingController@create')->name('guest-booking');

Route::group(['prefix' => 'dashboard', 'middleware' => ['auth']], function () {

    Route::get('/', 'CustomerController@index')->name('customer.dashboard');

    // ? Booking
    Route::group(['prefix' => 'booking'], function () {
        Route::get('/booking-history', 'CustomerController@bookingHistory')->name('customer.booking-history');
        Route::get('/upcoming-booking', 'CustomerController@upcomingBooking')->name('customer.upcoming-booking');
        Route::get('/{id}/view-booking/', 'CustomerController@viewBooking')->name('customer.view-booking');

        Route::get('/{id}/view-upcoming-booking-details', 'CustomerController@viewUpcomingBookingDetails')->name('customer.upcoming.booking.details');

        // Route::get('/{id}/show-booking-details', 'CustomerController@viewCustomerBookingDetails')->name('customer.view-booking');
    });

    Route::get('/profile', 'CustomerController@profile')->name('customer.profile');

    Route::get('/settings', 'CustomerController@settings')->name('customer.settings');
    Route::post('/upload-profile-image', 'CustomerController@uploadImage')->name('customer.upload-image');
    Route::patch('/{id}/update', 'CustomerController@updateProfile')->name('customer.profile.update');
    Route::get('/change-password', 'CustomerController@changePassword')->name('customer.password.change');
    Route::patch('/{id}/password-update', 'CustomerController@updatePassword')->name('customer.password.update');

    Route::get('/{any}', 'CustomerController@index')->where('any', '.*');
});

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');

// Route::get("{path}", "WelcomeController@index")->where("path", "([A-z\d-\/_.]+)?");

// Route::get('/home', 'HomeController@index')->name('home');
