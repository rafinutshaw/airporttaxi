<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Customer;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Mail\WelcomeCustomer;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Providers\RouteServiceProvider;
use App\Rules\CustomerEmailCheckingRule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Notifications\RegistrationNotification;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        // return Validator::make($data, [
        //     'name' => ['required', 'string', 'max:255'],
        //     'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        //     'password' => ['required', 'string', 'min:8', 'confirmed'],
        // ]);
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', new CustomerEmailCheckingRule],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    // public function register(Request $request)
    // {
    //     $ifGuestUser = Customer::where('email', '=', $request['email'])->first();

    //     if ($ifGuestUser === null) {
    //         // user doesn't exist
    //         return response()->json('Guest User');
    //     }

    //     return response()->json($ifGuestUser);
    // }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $ifGuestUser = Customer::where('email', '=', $data['email'])->first();

        if ($ifGuestUser === null) {
            // user doesn't exist
            return Customer::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'status' => 1,
                'password' => Hash::make($data['password']),
            ]);
        } else if ($ifGuestUser !== null && $ifGuestUser->status != 1) {
            $ifGuestUser->name = $data['name'];
            $ifGuestUser->password = Hash::make($data['password']);
            $ifGuestUser->status = 1;
            $ifGuestUser->save();
            return $ifGuestUser;
        }

        // return User::create([
        //     'name' => $data['name'],
        //     'email' => $data['email'],
        //     'password' => Hash::make($data['password']),
        // ]);
        // $email = $data['email'];
        // $ifGuestUser = Customer::findOrFail($email)->get();
        // $ifGuestUser = Customer::where('email', '=', $email)->first();

        // return response()->json($email);

        // return Customer::create([
        //     'name' => $data['name'],
        //     'email' => $data['email'],
        //     'password' => Hash::make($data['password']),
        // ]);
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        // Mail::to($user->email)->send(new WelcomeCustomer($user->name, config('app.url')));
        // $user->notify(new RegistrationNotification($user->name));
        return $user;
    }
}
