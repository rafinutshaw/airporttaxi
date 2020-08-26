<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Traits\MediaUploadingTrait;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    use MediaUploadingTrait;
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

    public function fileUpload()
    {
        return view('fileUpload');
    }
    private function upload(Request $request, string $storagePath = "app/uploads", string $fileName = 'file')
    {
        $file = time() . '.' . $request->file($fileName)->extension();

        // $name = uniqid() . '_' . trim($file->getClientOriginalName());
        // $name = uniqid() . '.' . $file->extension();

        // $path = storage_path($storagePath);
        // $file->move($path, $name);

        $path = $request->drivingLicense->storeAs('/', $file, 'career');

        return $path;
    }
    public function storeFile(Request $request)
    {
        $url = "http://127.0.0.1:900/api/store-file";
        $params = array(
            "name" => "Ravishanker Kusuma",
            "age" => "32",
            "location" => "India"
        );
        $postData = $params;
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_POST, count($postData));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

        $output = curl_exec($ch);

        curl_close($ch);
        // dd($output);
        return $output;
        // Route::post('http://127.0.0.1:900/store-file', );
        // $fileName = time() . '.' . $request->file('drivingLicense')->extension();
        // dd($fileName);

        // ? Storing the image and getting the file path
        // $path = $request->drivingLicense->storeAs('career/', $fileName, 'public');
        // return $path;
        // dd($request->drivingLicense);
        // return $request;
        // return response()->json($request, 200);
        // $this->storeMedia($request, 'app/career', 'drivingLicense');
        // $drivingLicense = $this->upload($request, 'app/career', 'drivingLicense');
        // // $privateHireCertificate = $this->storeMedia($request, 'app/career', 'privateHireCertificate');
        // dd($drivingLicense);
        // // $proofOfAddress = $this->storeMedia($request, 'app/career', 'proofOfAddress');
        // $insuranceDocument = $this->storeMedia($request, 'app/career', 'insuranceDocument');
        // $photo = $this->storeMedia($request, 'app/career', 'photo');
        // return response()->json([$drivingLicense, $privateHireCertificate, $proofOfAddress, $insuranceDocument, $photo]);
        // return $this->storeMedia($request, 'app/career', 'drivingLicense');
        // return true;
    }
}
