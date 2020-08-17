<?php

namespace App\Http\Controllers\Traits;

use App\Booking;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Storage;

trait BookingInvoiceTrait
{
    /**
    //  * Saving a temporary PDF to storage
    //  * so that we can attach this PDF to email
    
    *   @param \App\Booking $booking
    *   @return string
     */
    public function saveInvoice(Booking $booking)
    {
        if (isset($booking)) {
            $data = $this->setInvoiceData($booking);
        }

        $pdf = PDF::loadView('pdf-template.booking-summery', compact('data'));

        $pdfFileName = "booking invoice " . uniqid() . ".pdf";
        Storage::put('public/pdf/' . $pdfFileName, $pdf->output());
        return $pdfFileName;
    }

    /**
     * Download Booking Invoice
     * 
     * @param mixed $id
     * @return mixed
     */
    public function downloadInvoice($id)
    {
        $booking = Booking::find($id);
        if (!empty($booking)) {
            $data = $this->setInvoiceData($booking);
            $pdf = PDF::loadView('pdf-template.booking-summery', compact('data'));
            return $pdf->download('booking-summery ' . uniqid() . '.pdf');
        }
    }

    /**
     * Set Booking data and return
     * 
     * @param \App\Booking $booking
     * @return array $data
     */
    private function setInvoiceData(Booking $booking)
    {
        $data = [
            'name' => $booking->customer->name,
            'mobile' => $booking->mobile,
            'email' => $booking->customer->email,
            'invoiceNo' => $booking->id,
            'dateOfInvoice' => $booking->journey_date,
            'from' => $booking->from,
            'via' => $booking->via,
            'to' => $booking->to,
            'journeyDate' => $booking->journey_date,
            'journeyType' => $booking->journey_type,
            'passengers' => $booking->passengers,
            'luggage' => $booking->luggage,
            'totalPrice' => $booking->total_price,
            'vehicle' => $booking->vehicle->type
        ];
        return $data;
    }
}
