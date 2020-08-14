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
