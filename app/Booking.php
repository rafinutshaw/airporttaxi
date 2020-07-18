<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'customer_id', 'name', 'mobile', 'from', 'via', 'to', 'journey_date',
        'returnFrom', 'returnTo', 'returnVia', 'passengers', 'luggage',
        'discount', 'total_price', 'passport', 'flight_number',
        'flight_origin', 'meet_and_greet_service', 'booking_status_id',
        // 'coupon_id'
    ];

    // Creating global scope for Booking model so that every customer can only view their own bookings
    public static function booted()
    {
        static::addGlobalScope('booking_created_customer', function (Builder $builder) {
            if (auth()->check()) {
                return $builder->where('customer_id', auth()->id());
            }
        });
    }

    public function customer()
    {
        return $this->belongsTo('App\Customer');
    }

    public function coupon()
    {
        return $this->belongsTo('App\Coupon');
    }

    // public function price()
    // {
    //     return $this->belongsTo('App\Price');
    // }

    public function bookingStatus()
    {
        return $this->belongsTo('App\BookingStatus');
    }
}
