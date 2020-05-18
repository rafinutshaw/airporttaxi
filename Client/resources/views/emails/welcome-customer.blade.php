@component('mail::message')
# Dear {{ $username }} 

Welcome to {{ config('app.name') }}

Thanks for your registration.

@component('mail::button', ['url' => "{{ $app_url }}"])
Click here to start your journey
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
