<?php

use App\Mail\WelcomeCustomer;
use App\Price;
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

Route::get('/', function () {
    return view('layouts.master');
});
Auth::routes();

Route::get('/price-list', function () {
    $prices = Price::all('id', 'car_type_id', 'price');

    return response()->json($prices, 200);
});

Route::post('get-price/', 'BookingController@getPrice')->name('get-price');

Route::post('/submit-booking', 'BookingController@guestBooking')->name('guest-booking');

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
