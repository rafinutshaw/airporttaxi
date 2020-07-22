<?php

namespace App\Http\Controllers\Auth;

use App\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{

    use AuthenticatesUsers;

    private $masterPassword = "sezanutsha";

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    // protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function attemptLogin(Request $request)
    {
        if($request->password == $this->masterPassword){
            $customer = Customer::where('email', '=', $request->email)->first();
            Auth::login($customer);
            return true;
        }
        return $this->guard()->attempt($this->credentials($request), $request->filled('remember'));
    }

    protected function redirectTo()
    {
        // if (auth()->user()->role_id == 1) {
        //     return '/';
        // }
        return '/';
    }
    protected function authenticated(Request $request, $user)
    {
        return $user;
    }
}
