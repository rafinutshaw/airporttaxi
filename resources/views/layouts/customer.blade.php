<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
    @yield('style')

</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div id="app" class="wrapper">
        <header>
            @include('includes.customer.navbar')
        </header>

        {{-- Sidebar --}}
        @include('includes.customer.sidebar')

        {{-- Body Content --}}
        @yield('content')

        {{-- Additional Scripts --}}
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
    <script>
        $(document).ready(function () {
            $(".nav-link").click(function () {
                if (!$(this).hasClass("active")) {
                    $(".nav-link").removeClass("active");
                    $(this).addClass("active");
                }
            });

            // auto logout script
            // const timeout = 7200000; // 7200000 ms = 120 minutes
            // var idleTimer = null;
            // $("*").bind(
            //     "mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick",
            //     function () {
            //         clearTimeout(idleTimer);

            //         idleTimer = setTimeout(function () {
            //             localStorage.removeItem('loggedIn');
            //             localStorage.removeItem('authUsername');
            //             localStorage.removeItem("authEmail");
            //             localStorage.removeItem("authMobile");
            //             document.getElementById("logout-form").submit();
            //         }, timeout);
            //     }
            // );
            // $("body").trigger("mousemove");
        });

    </script>
    @stack('scripts')

    @yield('scripts')
</body>

</html>
