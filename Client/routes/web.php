<?php

use App\Mail\WelcomeCustomer;
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

Route::group(['prefix' => 'dashboard', 'middleware' => ['auth']], function () {

    Route::get('/', 'CustomerController@index')->name('customer.dashboard');
    Route::get('/profile', 'CustomerController@profile')->name('customer.profile');
    Route::post('/upload-profile-image', 'CustomerController@uploadImage')->name('customer.upload-image');
    Route::patch('/{id}/update', 'CustomerController@update')->name('customer.profile.update');
    Route::patch('/{id}/password-update', 'CustomerController@changePassword')->name('customer.password.update');
});

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');

// Route::get("{path}", "WelcomeController@index")->where("path", "([A-z\d-\/_.]+)?");

// Route::get('/home', 'HomeController@index')->name('home');
