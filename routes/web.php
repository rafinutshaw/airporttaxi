<?php

use App\Vehicle;
use App\Events\MyEvent;
use Illuminate\Http\Request;
use App\Events\BookingSubmittedEvent;
use Illuminate\Support\Facades\Route;
use App\Notifications\CareerNotification;
use App\Notifications\BookingSubmittedNotification;
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

// Route::get('/demo', function () {

//     // event(new MyEvent(auth()->user()->unreadNotifications->count(), auth()->user()));
//     $booking = App\Booking::findOrFail(2);
//     $user = App\User::findOrFail(1);
//     $user->notify(new BookingSubmittedNotification($booking->id));
//     // $user->notify(new CareerNotification(5));
//     // event(new MyEvent($booking->id, 'booking-submitted'));
//     // Notification::send(Auth::user(), new BookingSubmittedNotification);
//     // Notification::send(Auth::user(), new BookingSubmittedNotification);
//     return "Done";
// });

Route::get("/file", "HomeController@fileUpload")->name("file.upload");
Route::post("/file/store", "HomeController@storeFile")->name("store.file");
Route::get('/get-file/{path}', function ($path) {
    $image = storage_path("app/career/" . $path);
    if (!file_exists($image)) {
        abort('404');
    }
    return response()->file($image);
})->name('get.file');

Route::post('career', function (Request $request) {
    return $request;
});

Route::get('/', function () {
    return view('layouts.master');
});

Auth::routes();

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
