<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use App\Mail\BookingSubmitted;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $booking;
    protected $attachedPDF;

    public function __construct($booking, $attachedPDF)
    {
        $this->booking = $booking;
        // $this->attachedPDF = base64_encode($attachedPDF);
        $this->attachedPDF = $attachedPDF;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to($this->booking->customer->email)->send(new BookingSubmitted($this->booking, $this->attachedPDF));
        // Mail::to("rafin.utshaw@gmail.com")->send(new BookingSubmitted($this->booking, $this->attachedPDF));
        // Mail::to("sezansarker@gmail.com")->send(new BookingSubmitted($this->booking, $this->attachedPDF));
    }
}
