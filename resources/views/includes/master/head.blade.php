<head>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>


    <!-- Mobile Specific Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon-->
    <link rel="shortcut icon" href="img/fav.png">
    <!-- Author Meta -->
    <meta name="author" content="colorlib">
    <!-- Meta Description -->
    <meta name="description" content="">
    <!-- Meta Keyword -->
    <meta name="keywords" content="">
    <!-- meta character set -->
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet">
    <!--
                CSS
                ============================================= -->
    <link rel="stylesheet" href="{{ asset("css/theme/linearicons.css") }}">
    <link rel="stylesheet" href="{{ asset("css/theme/font-awesome.min.css") }}">
    <link rel="stylesheet" href="{{ asset("css/theme/magnific-popup.css") }}">
    <link rel="stylesheet" href="{{ asset("css/theme/nice-select.css") }}">
    <link rel="stylesheet" href="{{ asset("css/theme/animate.min.css") }}">
    <link rel="stylesheet" href="{{ asset("css/theme/jquery-ui.css") }}">
    <link rel="stylesheet" href="{{ asset('css/theme/main.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>

    <script src="{{ asset("js/theme/jquery.min.js") }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.serializeJSON/2.8.1/jquery.serializejson.min.js">
    </script>

    <script src="{{ asset("js/theme/easing.min.js") }}"></script>
    <script src="{{ asset("js/theme/hoverIntent.js") }}"></script>
    <script src="{{ asset("js/theme/superfish.min.js") }}"></script>
    <script src="{{ asset("js/theme/jquery.ajaxchimp.min.js") }}"></script>
    <script src="{{ asset("js/theme/jquery.magnific-popup.min.js") }}"></script>
    <script src="{{ asset("js/theme/jquery-ui.js") }}"></script>
    <script src="{{ asset("js/theme/jquery.nice-select.min.js") }}"></script>
    <script src="{{ asset("js/theme/mail-script.js") }}"></script>
    <script src="{{ asset("js/theme/main.js") }}"></script>

    <script src="{{ asset('js/app.js') }}" defer></script>
    {{-- <script src="{{ asset('js/theme.js') }}"></script> --}}
</head>
