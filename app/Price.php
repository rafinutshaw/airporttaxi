<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    protected $fillable = [
        'car_type_id', 'trip_type', 'price'
    ];

    public function carType()
    {
        return $this->belongsTo('App\CarType');
    }

    // public function bookings()
    // {
    //     return $this->hasMany('App\Booking');
    // }
}
