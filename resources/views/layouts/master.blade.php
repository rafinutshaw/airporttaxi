<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('includes.master.head')
<script type="application/javascript">
    function update() {
        document.getElementById("clock").innerHTML = moment().tz('Europe/London').format('LL LTS')
    }
    setInterval(update, 1000);
    
    let authUser = '{!! Auth::check() !!}';
    if(authUser != 1) {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("authUsername");
        localStorage.removeItem("authEmail");
    }
</script>

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