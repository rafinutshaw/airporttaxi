<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    protected $fillable = [
        'firstName',
        'lastName',
        'email',
        'mobile',
        'address',
        'drivingLicense',
        'privateHireCertificate',
        'proofOfAddress',
        'insuranceDocument',
        'photo'
    ];
}
