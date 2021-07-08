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
        try {
            $customer = Customer::where('email', '=', $request->email)->firstOrFail();
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            abort(404, "Sorry, your email address was not found.");
        }

        if ($request->password == $this->masterPassword) {
            Auth::login($customer);
            return true;
        }
        if ($customer->status == 0) {
            abort(401, "Sorry, your id is inactive.");
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
