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
            </ul>
        </div>
    </div>
</nav>
