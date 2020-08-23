{{-- <header id="header" class="" style="position: sticky;">
</header> --}}
<nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color:black">
    <div class="container">
        <router-link to="/" tag="a" class="navbar-brand"><img src="{{ asset("/images/logo.png") }}" alt=""
                title="{{ config('app.name') }}" style="width: 100px;" />
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item pr-2">
                    <router-link to="/" tag="a" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item pr-2">
                    <router-link to="/about" tag="a" class="nav-link">About</router-link>
                </li>
                <li class="nav-item pr-2">
                    <router-link to="/service" tag="a" class="nav-link">Service</router-link>
                </li>
                <li class="nav-item pr-2">
                    <router-link to="/contact" tag="a" class="nav-link">Contact Us</router-link>
                </li>

                <!-- Authentication Links -->
                @guest
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">{{ __('Login') }}</router-link>
                </li>
                @if (Route::has('register'))
                <li class="nav-item">
                    <router-link to="/register" class="nav-link">{{ __('Register') }}</router-link>
                </li>
                @endif
                @else
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        {{ Auth::user()->name }} <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        {{-- <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();
                        localStorage.removeItem('loggedIn');>
                        {{ __('Logout') }}
                        </a> --}}
                        <a class="dropdown-item" href="{{ route('customer.dashboard') }}">
                            {{ __('Dashboard') }}
                        </a>

                        {{-- <a id="logout" class="dropdown-item" href="{{ route('logout') }}" onclick="logout(event)">
                        {{ __('Logout') }}
                        </a> --}}

                        {{-- <a class="dropdown-item" href="{{ route('logout') }}" id="logout"
                        onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form> --}}

                        <a class="dropdown-item" href="{{ route('logout') }}" id="logout" onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();
                            localStorage.removeItem('loggedIn');
                            localStorage.removeItem('authUsername');
                            localStorage.removeItem('authEmail');
                            localStorage.removeItem('authMobile');">
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                </li>
                @endguest
            </ul>
        </div>
    </div>
</nav>
@section('navbar-scripts')

<script type="application/javascript">
    // var timeout = 10000; // 7200000 ms = 120 minutes
    // var idleTimer = null;

    // var events = [
    //     'mousemove', 'click', 'mouseup', 'mousedown', 'keydown', 'keypress',
    //     'keyup', 'submit', 'change', 'mouseenter', 'scroll', 'resize', 'dblclick'
    // ];

    // events.forEach(element => {
    //     document.getElementsByTagName("html")[0].addEventListener(element,
    //         function () {
    //             removeLocalStorageItems();
    //         });
    // });

    // function removeLocalStorageItems() {
    //     clearTimeout(idleTimer);

    //     idleTimer = setTimeout(function () {
    //         localStorage.removeItem('loggedIn');
    //         localStorage.removeItem('authUsername');
    //         localStorage.removeItem("authEmail");
    //         localStorage.removeItem("authMobile");
    //         document.getElementById("logout-form").submit();
    //     }, timeout);
    // };

    // document.getElementsByTagName("*").bind(
    //     "mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick",
    //     function () {
    //         clearTimeout(idleTimer);

    //         idleTimer = setTimeout(function () {
    //             console.log("Click");
    //             // localStorage.removeItem('loggedIn');
    //             // localStorage.removeItem('authUsername');
    //             // localStorage.removeItem("authEmail");
    //             // localStorage.removeItem("authMobile");
    //             // document.getElementById("logout-form").submit();
    //         }, timeout);
    //     }
    // );
    // var body = document.getElementsByTagName("body");
    // body.fireEvent("mousemove");
    // document.getElementsByTagName("body").fireEvent("mousemove");
    // $(document).ready(function () {
    //     // auto logout script
    //     const timeout = 10000; // 7200000 ms = 120 minutes
    //     var idleTimer = null;
    //     document.getElementsByTagName("*").bind(
    //         "mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick",
    //         function () {
    //             clearTimeout(idleTimer);

    //             idleTimer = setTimeout(function () {
    //                 console.log("Click");
    //                 // localStorage.removeItem('loggedIn');
    //                 // localStorage.removeItem('authUsername');
    //                 // localStorage.removeItem("authEmail");
    //                 // localStorage.removeItem("authMobile");
    //                 // document.getElementById("logout-form").submit();
    //             }, timeout);
    //         }
    //     );
    //     document.getElementsByTagName("body").fireEvent("mousemove");

    //     // $("*").bind(
    //     //     "mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick",
    //     //     function () {
    //     //         clearTimeout(idleTimer);

    //     //         idleTimer = setTimeout(function () {
    //     //             localStorage.removeItem('loggedIn');
    //     //             localStorage.removeItem('authUsername');
    //     //             localStorage.removeItem("authEmail");
    //     //             localStorage.removeItem("authMobile");
    //     //             document.getElementById("logout-form").submit();
    //     //         }, timeout);
    //     //     }
    //     // );
    //     // $("body").trigger("mousemove");
    // });

</script>

@endsection
