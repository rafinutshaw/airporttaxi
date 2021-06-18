<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <title>@yield('title')</title>
    <link rel="icon" href="{{ asset('images/favicon.ico') }}" type="image/x-icon" />
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    {{-- Datatables --}}
    <link rel="stylesheet" href="{{ asset('vendor/datatables/css/searchBuilder.bootstrap4.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/datatables/css/dataTables.dateTime.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/datatables/css/select.bootstrap4.min.css') }}">

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

    {{-- jQuery UI --}}
    <link rel="stylesheet" href="{{ asset('vendor/jquery-ui/jquery-ui.min.css') }}">
    <script src="{{ asset('vendor/jquery-ui/jquery-ui.min.js') }}"></script>

    {{-- For Datatables Starts here--}}

    {{-- <link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css"> --}}

    <script src="{{ asset('vendor/datatables/js/jquery.dataTables.min.js') }}"></script>

    {{-- Bootstrap 4 --}}
    <script src="{{ asset('vendor/datatables/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/buttons.bootstrap4.min.js') }}"></script>

    {{-- Plugins --}}

    {{-- Search Builder --}}
    <script src="{{ asset('vendor/datatables/js/dataTables.searchBuilder.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/searchBuilder.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/dataTables.dateTime.min.js') }}"></script>

    {{-- For Excel --}}
    <script src="{{ asset('vendor/datatables/js/jszip.min.js') }}"></script>

    <script src="{{ asset('vendor/datatables/js/vfs_fonts.js') }}"></script>

    {{-- For Col reorder --}}
    <script src="{{ asset('vendor/datatables/js/dataTables.colReorder.min.js') }}"></script>

    {{-- For PDF Maker --}}
    <script src="{{ asset('vendor/datatables/js/pdfmake.min.js') }}"></script>

    {{-- For Buttons --}}
    <script src="{{ asset('vendor/datatables/js/buttons.html5.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/buttons.print.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/js/buttons.colVis.min.js') }}"></script>

    {{-- Select --}}
    <script src="{{ asset('vendor/datatables/js/dataTables.select.min.js') }}"></script>

    <script src="{{ asset('js/custom.js') }}"></script>
    <script src="{{ asset('js/datatables.js') }}"></script>
    @yield('scripts')
</body>

</html>