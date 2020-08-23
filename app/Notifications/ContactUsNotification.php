<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class ContactUsNotification extends Notification
{
    use Queueable;

    public $model_id;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($model_id)
    {
        $this->model_id = $model_id;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['broadcast'];
        // return ['database', 'broadcast'];
        // return ['mail', 'database', 'broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    // public function toMail($notifiable)
    // {
    //     return (new MailMessage)
    //                 ->line('The introduction to the notification.')
    //                 ->action('Notification Action', url('/'))
    //                 ->line('Thank you for using our application!');
    // }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toDatabase($notifiable)
    {
        return [
            'model_id' => $this->model_id,
            'title' => 'A Contact Us with id #' . $this->model_id . ' has been submitted',
        ];
    }
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'id' => $this->id,
            'created_at' => now(),
            'read_at' => null,
            'data' => [
                'model_id' => $this->model_id,
                'title' => 'A Contact Us with id #' . $this->model_id . ' has been submitted',
            ],
        ]);
    }
}
