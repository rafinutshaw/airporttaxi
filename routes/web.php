<?php

use App\Vehicle;
use App\Events\MyEvent;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;
use App\Events\BookingSubmittedEvent;
use App\Mail\ContactUs;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Notifications\CareerNotification;
use App\Notifications\BookingSubmittedNotification;
use Illuminate\Support\Facades\Mail;

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

Route::get('/get-file/{path}', function ($path) {
    $image = storage_path("app/career/new/" . $path);
    if (!file_exists($image)) {
        abort('404');
    }
    return response()->file($image);
})->name('get.file')->middleware('auth');

// Route::get('/get-file/{filename}', function ($filename) {

//     $path = storage_path("/app/images/customer-profile-image/" . $filename);
//     if (!file_exists($path)) {
//         abort('404');
//     }
//     $file = File::get($path);
//     $type = File::mimeType($path);
//     $response = Response::make($file, 200);
//     $response->header("Content-Type", $type);
//     return $response;

//     // return response()->file($path);
// })->name('get.file')->middleware('auth');

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

Route::post('/send-email', 'BookingController@sendEmail')->name('send-email');

Route::post('/download-PDF', 'BookingController@downloadPDF')->name('download-pdf');

Route::post('get-price/', 'BookingController@getPrice')->name('get-price');

Route::post('/submit-booking', 'BookingController@create')->name('guest-booking');

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
    return view('index');
})->where('any', '.*');

// Route::get("{path}", "WelcomeController@index")->where("path", "([A-z\d-\/_.]+)?");

// Route::get('/home', 'HomeController@index')->name('home');
