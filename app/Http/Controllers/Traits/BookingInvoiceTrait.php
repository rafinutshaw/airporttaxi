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
     * @param App/Booking $booking
     * @return DomPDF download
     */
    public function downloadInvoice(Booking $booking)
    {
        if (!empty($booking)) {
            $data = $this->setInvoiceData($booking);
            $pdf = PDF::loadView('pdf-template.booking-summery', compact('data'));
            // return $pdf->download('booking-summery ' . uniqid() . '.pdf');
            return $pdf->download($this->setPDFName($booking->id));
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
        $booking->from = json_decode($booking->from);
        $booking->via = json_decode($booking->via);
        $booking->to = json_decode($booking->to);
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
            'flight_number' => $booking->flight_number,
            'flight_origin' => $booking->flight_origin,
            'passengers' => $booking->passengers,
            'luggage' => $booking->luggage,
            'sub_total' => $booking->sub_total,
            'discount' => $booking->discount,
            'totalPrice' => $booking->total_price,
            'paid' => $booking->paid,
            'total_due' => $booking->total_due,
            'vehicle' => $booking->vehicle->type
        ];
        return $data;
    }

    /**
     * Set name for PDF
     * 
     * @param booking id
     * @return string name
     */
    private function setPDFName($id)
    {
        return 'Booking Invoice #' . $id . '.pdf';
        // return 'booking id#' . $id . ' ' . uniqid() . '.pdf';
    }
}
