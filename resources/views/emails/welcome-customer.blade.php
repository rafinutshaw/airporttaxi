@component('mail::message')
# Dear {{ $username }} 

Welcome to {{ config('app.name') }}

Thanks for your registration.

@component('mail::button', ['url' => "{{ $app_url }}"])
Start your journey
@endcomponent

Regards,<br>
{{ config('app.name') }}
___

If you’re having trouble clicking the "Start your journey" button, copy and paste the URL below into your web browser: <{{ config('app.url') }}>
@endcomponent
