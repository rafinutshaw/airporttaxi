<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Customer;
use Faker\Generator as Faker;

$factory->define(Customer::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'gender' => $faker->numberBetween($min = 0, $max = 1),
        'mobile' => $faker->e164PhoneNumber,
        'password' => '$2y$10$KwGQ1FtK9DxaZxdX5KgoGOoX49.s5KMASl7IswFBwUfYk4hnY/iDa', // 12345678
        'remember_token' => Str::random(10),
    ];
});
