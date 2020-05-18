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

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/home', function () {
    // Mail::to("sezansarker@gmail.com")->send(new WelcomeCustomer("Sezan", config('app.url')));
    // return view('index');
    dd(config('app.url'));
});

Auth::routes();

Route::get('/email', function () {

    Mail::to("sezansarker@gmail.com")->send(new WelcomeCustomer());
});

Route::get('/demo', function () {
    return "demo";
});

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');

// Route::get("{path}", "WelcomeController@index")->where("path", "([A-z\d-\/_.]+)?");

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
