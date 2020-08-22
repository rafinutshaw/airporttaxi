<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'customer_id',
        'mobile',
        'from',
        'via',
        'to',
        'journey_date',
        'journey_type',
        'passengers',
        'luggage',
        'discount',
        'total_price',
        'passport',
        'flight_number',
        'flight_origin',
        'vehicle_id',
        'booking_status_id',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'journey_date'
    ];

    // Creating global scope for Booking model so that every customer can only view their own bookings
    // public static function booted()
    // {
    //     static::addGlobalScope('booking_created_customer', function (Builder $builder) {
    //         if (auth()->check()) {
    //             return $builder->where('customer_id', auth()->id());
    //         }
    //     });
    // }

    public function customer()
    {
        return $this->belongsTo('App\Customer');
    }

    public function coupon()
    {
        return $this->belongsTo('App\Coupon');
    }

    public function bookingStatus()
    {
        return $this->belongsTo('App\BookingStatus');
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class, 'vehicle_id', 'id');
    }
}
