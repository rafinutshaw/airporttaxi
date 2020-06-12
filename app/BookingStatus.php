<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookingStatus extends Model
{
    protected $table = 'booking_status';

    protected $fillable = [
        'status'
    ];

    public function bookings()
    {
        return $this->hasMany('App\Booking');
    }
}
