<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $fillable = [
        'type', 'price', 'basePrice', 'maxPassenger', 'luggage', 'description', 'image'
    ];

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'vehicle_id', 'id');
    }
}
