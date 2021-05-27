<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <link rel="icon" href="{{ asset('images/favicon.ico') }}" type="image/x-icon" />
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
    @yield('style')

</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div id="app" class="wrapper">
        {{-- Loader --}}
        @include('includes.customer.loader')

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
    <script src="{{ asset('js/custom.js') }}"></script>
    @yield('scripts')
</body>

</html>