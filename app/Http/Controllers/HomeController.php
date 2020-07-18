<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function pdf()
    {
        $data = [
            'name' => 'sezan',
            'email' => 'sezansarker@gmail.com',
            'bookingId' => 123456
        ];
        $pdf = PDF::loadView('pdf', $data);
        // return $pdf->download('disney.pdf');
        return $pdf->stream();
    }
}
