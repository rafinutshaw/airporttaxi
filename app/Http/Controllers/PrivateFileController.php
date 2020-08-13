<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrivateFileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Get file name for any type of image
     * 
     * @param string $fileName 
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function getImage(string $fileName)
    {
        $image = storage_path("app/" . $fileName);
        if (!file_exists($image)) {
            abort('404');
        }
        return response()->file($image);
    }

    /**
     * Get file name for any type of pdf
     * 
     * @param string $fileName 
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function getPDF(string $fileName)
    {
        $pdf = storage_path("app/pdf/" . $fileName);
        if (!file_exists($pdf)) {
            abort('404');
        }
        return response()->file($pdf);
    }

    /**
     * Get CV
     * 
     * @param string $fileName 
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function getCV(string $fileName)
    {
        $pdf = storage_path("app/cv/" . $fileName);
        if (!file_exists($pdf)) {
            abort('404');
        }
        return response()->file($pdf);
    }

    /**
     * Store CV
     * 
     * @param string $fileName 
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function storeCV(string $fileName)
    {
        $pdf = storage_path("app/cv/" . $fileName);
        if (!file_exists($pdf)) {
            abort('404');
        }
        return response()->file($pdf);
    }
}
