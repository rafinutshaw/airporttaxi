@component('mail::message')

# Dear {{ $booking->name }},

Your request to book a transport for your trip in {{ config('app.name') }} was successful.

**Booking ID: {{ $booking->id }}.**

You may expect someone to contact you soon.
Find your e-ticket in the attachment.

Thank You.

If it does not concern you please ignore this email.
This is an automatically generated email. Please do not repl    y to this message.

Thank you.<br>

**Contact** <br>

# {{ config('app.name') }} <br>
**Address:** {{ config('app.address') }} <br>
**Mobile:** {{ config('app.mobile') }} <br>
**Website:** {{ config('app.url') }}
@endcomponent