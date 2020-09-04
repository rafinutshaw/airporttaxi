<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('includes.master.head')

<body>
    <div id="app">
        @include('includes.master.navbar')
        <router-view></router-view>
        @include('includes.master.footer')
        @yield('navbar-scripts')
        @yield('customer-sidebar-script')
    </div>
</body>

</html>
