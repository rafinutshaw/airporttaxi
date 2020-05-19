<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    {{-- <script src="{{ asset("js/theme/jquery.min.js") }}"></script> --}}

    <script src="{{ asset('js/app.js') }}" defer></script>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
 
</head>
<body class="hold-transition sidebar-mini layout-fixed">
    <div id="app" class="wrapper">
        <header>
            @include('includes.customer.navbar')
        </header>

        {{-- Sidebar --}}
        @include('includes.customer.sidebar')

        @yield('customer-dashboard')
        @yield('customer-sidebar-script')
        
    </div>
</body>
</html>
