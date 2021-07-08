<?php

use App\Booking;
use App\Vehicle;
use App\Mail\ContactUs;
use Cartalyst\Stripe\Stripe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Cartalyst\Stripe\Exception\CardErrorException;

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

Route::get('/partners', function () {
    $partners = App\Partner::all(['id', 'path', 'photo']);
    return response()->json($partners, 200);
})->name("partners");

Route::post('/send-email', 'BookingController@sendEmail')->name('send.email');

Route::post('/download-PDF', 'BookingController@downloadPDF')->name('download.pdf');

Route::post('get-price/', 'BookingController@getPrice')->name('get.price');

Route::post('/submit-booking', 'BookingController@create')->name('guest.booking');

Route::get('/get-auth-user', function () {
    if (auth()->user()) {
        return auth()->user()->only('name', 'email', 'mobile');
    } else return false;
});

/*
* Manage Booking
*/
Route::post('/search-booking', 'BookingController@searchBooking')->name('booking.search');
Route::post('/update-booking', 'BookingController@updateBooking')->name('booking.update');

/*
* Stripe Payment
*/
Route::post('/paymentIntent', 'BookingController@stripePaymentIntent')->name('stripe.payment.intent');
Route::post('/confirmPayment', 'BookingController@confirmPayment')->name('stripe.payment.confirm');
Route::post('/get-booking-info', 'BookingController@getBookingForNewPayment')->name('stripe.booking.info');
Route::post('/repay-intent', 'BookingController@repayPaymentIntent')->name('stripe.repay.intent');

/*
|-------------------------------------------------------------------------------
* Customer's dashboard
|-------------------------------------------------------------------------------
| Base URL:       /dashboard
| Controller:     CustomerController@index
| Method:         GET
| Description:    Customer's area
*/
Route::group(['middleware' => ['auth']], function () {
    Route::get('/dashboard', 'CustomerController@index')->name('customer.dashboard');

    // * Booking
    Route::group(['prefix' => 'bookings', 'as' => 'bookings.'], function () {
        Route::get('/index', 'BookingController@index')->name('index');
        Route::get('/{id}/show', 'BookingController@show')->name('show');
    });

    // * Settings
    Route::group(['prefix' => 'customer/settings', 'as' => 'customer.'], function () {
        // * Profile
        Route::get('/', 'CustomerController@settings')->name('settings');
        Route::patch('/{id}/update', 'CustomerController@updateProfile')->name('profile.update');
        Route::post('/upload-profile-image', 'CustomerController@uploadImage')->name('upload-image');

        // * Change Password
        Route::get('/change-password', 'CustomerController@changePassword')->name('password.change');
        Route::patch('/{id}/password-update', 'CustomerController@updatePassword')->name('password.update');
    });

    Route::get('/{any}', 'CustomerController@index')->where('any', '.*');
});


Route::get('/{any}', function () {
    return view('layouts.master');
})->where('any', '.*');

// Route::get("{path}", "WelcomeController@index")->where("path", "([A-z\d-\/_.]+)?");

// Route::get('/home', 'HomeController@index')->name('home');
