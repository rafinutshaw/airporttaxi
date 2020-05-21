<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color:black">
            <div class="container">
                <router-link to="/" tag="a" class="navbar-brand"><img src="" alt="" style="width: 40px; height: 40px" />
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
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
                            <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                        @if (Route::has('register'))
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link">Register</router-link>
                        </li>
                        @endif
                        @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="">
                                    Dashboard
                                </a>

                                <a id="logout" class="dropdown-item" href="" onclick="logout(event)">
                                    Logout
                                </a>

                                <form id="logout-form" action="" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {

    }

</script>

<style scoped>

</style>
