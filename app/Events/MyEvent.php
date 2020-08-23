<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MyEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $data;
    public string $notificationType;
    // public $unreadNotifications;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($data, string $notificationType)
    {
        $this->data = $data;
        $this->notificationType = $notificationType;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        // return new Channel('my-channel');
        return new PrivateChannel('my-channel');
        // return 'my-channel';
    }

    public function broadcastAs()
    {
        return 'my-event';
    }
}
