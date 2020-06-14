<?php

namespace App\Rules;

use App\Customer;
use Illuminate\Contracts\Validation\Rule;

class CustomerEmailCheckingRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $customer = Customer::where('email', '=', $value)->first();
        if($customer === null) {
            return true;
        } else if($customer !== null && $customer->status != 1) {
            return true;
        } else 
            return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute has already been taken.';
    }
}
