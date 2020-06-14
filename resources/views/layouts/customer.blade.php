<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    {{-- <script src="{{ asset("js/theme/jquery.min.js") }}"></script> --}}

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
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
    @yield('scripts')
</body>

</html>
