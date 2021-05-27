<head>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>
    {{-- <title>@yield('title')</title> --}}

    <!-- Mobile Specific Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon-->
    <link rel="icon" href="{{ asset('images/favicon.ico') }}" type="image/x-icon" />
    <!-- Author Meta -->
    <meta name="author" content="{{ config('app.name') }}">
    <!-- Meta Description -->
    <meta name="description" content="{{ config('app.slogan') }}">
    <!-- Meta Keyword -->
    <meta name="keywords" content="">
    <!-- meta character set -->
    <meta charset="UTF-8">

    <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet">

    <!-- ============================= CSS ============================= -->
    <link rel="stylesheet" href="{{ asset("css/theme/linearicons.css") }}">
    <link rel="stylesheet" href="{{ asset('css/theme/main.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">

    <script src="https://js.stripe.com/v3/"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"></script>
    <script src="{{ asset('js/vendor/jquery-3.4.1.slim.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
        integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.31/moment-timezone-with-data.min.js"
        integrity="sha512-HZcf3uHWA+Y2P5KNv+F/xa87/flKVP92kUTe/KXjU8URPshczF1Dx+cL5bw0VBGhmqWAK0UbhcqxBbyiNtAnWQ=="
        crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>

    {{-- Mapbox --}}

    <script src="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js"></script>
    <link href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" />
</head>