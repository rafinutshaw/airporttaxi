<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'customer_id', 'name', 'mobile', 'from', 'via', 'to', 'journey_date', 'passengers',
        'luggage', 'coupon_id', 'price_id', 'discount', 'total_price', 'passport', 'flight_number',
        'flight_origin', 'meet_and_greet_service', 'booking_status_id'
    ];

    public function customer()
    {
        return $this->belongsTo('App\Customer');
    }

    public function coupon()
    {
        return $this->belongsTo('App\Coupon');
    }

    public function price()
    {
        return $this->belongsTo('App\Price');
    }

    public function bookingStatus()
    {
        return $this->belongsTo('App\BookingStatus');
    }
}
