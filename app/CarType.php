<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarType extends Model
{
    protected $fillable = [
        'type', 'maxPassenger', 'description', 'image'
    ];

    public function price()
    {
        return $this->hasMany('App\Price');
    }
}
