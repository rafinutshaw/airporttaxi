<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('includes.master.head')

<body>
    <div id="app">
        @include('includes.master.navbar')
        {{-- @yield('index') --}}
        {{-- <main class="py-4">
            @yield('welcome')
            <router-view></router-view>
        </main> --}}
        <router-view></router-view>
        @include('includes.master.footer')
        @yield('navbar-scripts')
        @yield('customer-sidebar-script')
    </div>
</body>

</html>
