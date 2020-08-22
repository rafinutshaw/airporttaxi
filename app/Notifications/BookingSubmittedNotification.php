<?php

namespace App\Notifications;

use App\Events\MyEvent;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class BookingSubmittedNotification extends Notification
{
    use Queueable;

    public $data;
    public string $notificationType;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($data, string $notificationType)
    {
        $this->data = $data;
        $this->notificationType = $notificationType;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast'];
        // return ['broadcast'];
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
            'data' => $this->data,
            'notificationType' => $this->notificationType,
            // 'count' => $notifiable->unreadNotifications->count(),
            // 'user' => auth()->user(),
        ];
    }
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'data' => [
                'data' => $this->data,
                'type' => $this->notificationType
            ],
            // 'notifications' => auth()->user()->unreadNotifications,
            'notifiable' => $notifiable,
            // 'count' => $notifiable->unreadNotifications->count(),
            // 'user' => auth()->user(),
        ]);
    }
}
