<?php

use App\Booking;
use App\Vehicle;
use App\Mail\ContactUs;
use Cartalyst\Stripe\Stripe;
use Cartalyst\Stripe\Exception\CardErrorException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

Route::post('/checkout', function (Request $request) {
    $booking = Booking::findOrFail(2);
    try {
        $stripe = Stripe::make(getenv("STRIPE_SECRET_KEY"), getenv("STRIPE_API_VERSION"));
        $charge = $stripe->charges()->create([
            'currency' => 'GBP',
            'source' => $request->stripeToken,
            'receipt_email' => $request->receipt_email,
            'metadata' => [
                'booking_id' => $booking->id,
            ],
            'amount'   => $booking->total_price,
        ]);

        // return $charge;
        return response()->json(['id' => $charge['id'], 'receipt_url' => $charge['receipt_url']], 200);
    } catch (CardErrorException $e) {
        return $e->getMessage();
        // return back()->withErrors('Error!' . $e->getMessage());
    }
});

Route::get('/get-file/{path}', function ($path) {
    $image = storage_path("app/career/new/" . $path);
    if (!file_exists($image)) {
        abort('404');
    }
    return response()->file($image);
})->name('get.file')->middleware('auth');

Route::get('/', function () {
    return view('layouts.master');
});

Auth::routes();

Route::post('contact-us', function (Request $request) {
    $data = [
        'name' => $request->name,
        'email' => $request->email,
        'message' => $request->message,
    ];
    try {
        Mail::to(config('app.email'))->send(new ContactUs($data));
        return response()->json(['message' => 'Your request has been received. We will contact with you shortly.'], 200);
    } catch (\Throwable $th) {
        return response()->json(['message' => 'Something went wrong.'], 500);
    }
});

Route::get('/price-list', function () {
    $prices = Vehicle::all(['id', 'type', 'price', 'basePrice', 'maxPassenger', 'luggage', 'image']);

    return response()->json($prices, 200);
});

Route::post('/send-email', 'BookingController@sendEmail')->name('send.email');

Route::post('/download-PDF', 'BookingController@downloadPDF')->name('download.pdf');

Route::post('get-price/', 'BookingController@getPrice')->name('get.price');

Route::post('/submit-booking', 'BookingController@create')->name('guest.booking');

/*
* Stripe Payment
*/
Route::post('/paymentIntent', 'BookingController@stripePaymentIntent')->name('stripe.payment.intent');
Route::post('/confirmPayment', 'BookingController@confirmPayment')->name('stripe.payment.confirm');

/*
|-------------------------------------------------------------------------------
* Customer's dashboard
|-------------------------------------------------------------------------------
| Base URL:       /dashboard
| Controller:     CustomerController@index
| Method:         GET
| Description:    Customer's area
*/
Route::group(['prefix' => 'dashboard', 'middleware' => ['auth']], function () {

    Route::get('/', 'CustomerController@index')->name('customer.dashboard');

    // ? Booking
    Route::group(['prefix' => 'booking'], function () {
        Route::get('/booking-history', 'CustomerController@bookingHistory')->name('customer.booking.history');
        Route::get('/{id}/show-booking-details', 'CustomerController@viewBooking')->name('customer.booking.details');

        Route::get('/{id}/view-upcoming-booking-details', 'CustomerController@viewUpcomingBookingDetails')->name('customer.upcoming.booking.details');

        // Route::get('/{id}/show-booking-details', 'CustomerController@viewCustomerBookingDetails')->name('customer.booking.details');
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
    return view('layouts.master');
})->where('any', '.*');

// Route::get("{path}", "WelcomeController@index")->where("path", "([A-z\d-\/_.]+)?");

// Route::get('/home', 'HomeController@index')->name('home');
