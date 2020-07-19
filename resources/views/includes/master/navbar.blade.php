{{-- <header id="header" class="" style="position: sticky;">
</header> --}}
<nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color:black">
    <div class="container">
        <router-link to="/" tag="a" class="navbar-brand"><img src="{{ asset("img/logo (3).png") }}" alt=""
                title="{{ config('app.name') }}" style="width: 40px; height: 40px" />
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

                        {{-- <a class="dropdown-item" href="{{ route('logout') }}" id="logout">
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form> --}}
                    </div>
                </li>
                @endguest
            </ul>
        </div>
    </div>
</nav>
@section('navbar-scripts')

<script type="application/javascript">
    function logout(e) {
        e.preventDefault();
        document.getElementById('logout-form').submit();
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('authUsername');
        localStorage.removeItem("authEmail");
        localStorage.removeItem("authMobile");
        window.location = "/";
    };

</script>

@endsection