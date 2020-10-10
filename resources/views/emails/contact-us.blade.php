@component('mail::message')
# Dear Sir/Ma'am,

{{ $data['name'] }} from {{ $data['email'] }} sends you a message.

** Quote ** <br>
{{ $data['message'] }} <br>
** Unquote ** <br>

Thank you.<br>

# {{ config('app.name') }} <br>
**Address:** {{ $settings[2]->value }} <br>
**Mobile:** {{ $settings[0]->value }} <br>
**Website:** {{ config('app.url') }}
@endcomponent