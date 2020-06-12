<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    protected $fillable = [
        'code', 'discount_type', 'discount', 'start', 'end',
    ];

    public function bookings()
    {
        return $this->hasMany('App\Booking');
    }
}
