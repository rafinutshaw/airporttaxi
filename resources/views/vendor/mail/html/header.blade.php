<tr>
    <td class="header">
        <a href="{{ $url }}" style="
            display: inline-flex;
        ">
        {{-- @if (trim($slot) === 'Laravel')
            <img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
        @else
            <img src="{{ asset('./images/logo.png') }}" class="logo" height="60px" width="60px">
            <p style="margin-left: 5px; margin-top: 20px">{{ $slot }}</p>
        @endif --}}
            <img src="http://www.uk-airporttaxi.com/images/logo.png" class="logo">
            {{-- <p style="margin-left: 5px; margin-top: 20px; display: inline;">{{ $slot }}</p> --}}
        </a>
    </td>
</tr>
