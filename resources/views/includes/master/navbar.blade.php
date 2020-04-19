<header id="header" class="" style="position: sticky;">
    {{-- <div class="header-top">
    </div> --}}
    <div class="container-fluid main-menu">
        <div class="row align-items-center justify-content-between d-flex">
            <router-link to="/" tag="a"><img src="{{ asset("img/logo (3).png") }}" alt="" title="" style="max-width: 40px" /></router-link>
            <nav id="nav-menu-container">
                <ul class="nav-menu">
                    <li class="menu-active"><router-link to="/" tag="a">Home</router-link></li>
                    <li class="menu-active"><router-link to="/about" tag="a">About</router-link></li>
                    <li class="menu-active"><router-link to="/service" tag="a">Service</router-link></li>
                    {{-- <li class="menu-has-children"><a href="">Blog</a> --}}
                        <ul>
                            <li><a href="blog-home.html">Blog Home</a></li>
                            <li><a href="blog-single.html">Blog Single</a></li>
                            <li class="menu-has-children"><a href="">Level 2</a>
                                <ul>
                                    <li><a href="#">Item One</a></li>
                                    <li><a href="#">Item Two</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-active"><router-link to="/contact" tag="a">Contact</router-link></li>
                </ul>
            </nav><!-- #nav-menu-container -->
        </div>
    </div>
</header>

