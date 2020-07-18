<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Stmt\TryCatch;

use function GuzzleHttp\Psr7\try_fopen;

class BookingSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    protected $invoice;
    protected $booking;

    public function __construct($booking, $invoice)
    {
        $this->booking = $booking;
        $this->invoice = $invoice;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $getInvoice = Storage::get('public/pdf/' . $this->invoice);

        // return $getInvoice;
        // return $this->from('info@ukairporttaxi.com')
        //             ->subject('Booking Acknowledgement')
        //             ->markdown('emails.booking-submitted')
        //             ->with([
        //                 'booking' => $this->booking
        //             ])
        //             ->attachData($getInvoice, 'booking invoice.pdf');

        $this->from('noreply@uk-airporttaxi.com')
            ->subject('Booking Acknowledgement')
            ->markdown('emails.booking-submitted')
            ->with([
                'booking' => $this->booking
            ])
            ->attachData($getInvoice, 'booking invoice.pdf');

        return Storage::delete('public/pdf/' . $this->invoice);
    }
}
