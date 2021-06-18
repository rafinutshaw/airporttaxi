<?php

namespace App\Http\Controllers\Traits;

trait MessageTrait
{
    protected $customExceptionErrors = [
        'generic' => 'Sorry, there was a problem with this page.',
        'modelNotFound' => 'Sorry, the record not found.',
        'something' => 'Sorry, something went wrong, please try again later.',
    ];

    /**
     * Returns a custom error message for the exception.
     *
     * @param string $exceptionName
     * @return string
     */
    public function getExceptionError($exceptionName = 'generic')
    {
        return $this->customExceptionErrors[$exceptionName] ?: $this->customExceptionErrors['generic'];
    }

    protected $customSuccessMessage = [
        'success' => 'Data updated successfully.',
        'created' => 'New data created successfully.',
        'deleted' => 'Data deleted successfully.',
        'data_updated' => 'Data updated successfully.',
        'status_updated' => 'Status updated successfully.',
        'image_updated' => 'Image updated successfully',
        'profile_updated' => 'Profile updated successfully',
        'password_updated' => 'Password updated successfully',
        'career_submitted' => 'Your request is submitted successfully. Our team will contact you shortly.',
        'booking_created' => 'Booking created successfully.'
    ];

    /**
     * Returns a custom success message.
     *
     * @param string $successName
     * @return string
     */
    public function getSuccessMessage($successName = 'success')
    {
        return $this->customSuccessMessage[$successName] ?: $this->customSuccessMessage['success'];
    }
}
