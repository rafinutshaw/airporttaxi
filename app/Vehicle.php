<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $fillable = [
        'type', 'price', 'max_passengers', 'luggage', 'description', 'image'
    ];
}
