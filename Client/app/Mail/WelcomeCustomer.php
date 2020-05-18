<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WelcomeCustomer extends Mailable
{
    use Queueable, SerializesModels;

    protected $username;
    protected $app_url;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($username, $app_url)
    {
        $this->username = $username;
        $this->app_url = $app_url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Welcome')
            ->markdown('emails.welcome-customer')
            ->with([
                'username' => $this->username,
                'app_url' => $this->app_url,
            ]);
    }
}
