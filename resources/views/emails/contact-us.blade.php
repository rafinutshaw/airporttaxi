@component('mail::message')
# Dear Sir/Ma'am,

{{ $data['name'] }} from {{ $data['email'] }} sends you a message.

** Quote ** <br>
{{ $data['message'] }} <br>
** Unquote ** <br>

Thank you.<br>

# {{ config('app.name') }} <br>
**Address:** {{ config('app.address') }} <br>
**Mobile:** {{ config('app.mobile') }} <br>
**Website:** {{ config('app.url') }}
@endcomponent