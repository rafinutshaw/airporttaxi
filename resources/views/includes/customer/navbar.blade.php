<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="/" class="nav-link"><i class="fas fa-home mr-1"></i>Home</a>
        </li>
    </ul><!-- Right Side Of Navbar -->
    <ul class="navbar-nav ml-auto">
        <li class="dropdown mt-1">
            <div class="nav-dropdown-image-wrapper align-self-center pointer-on-hover" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{-- Checking if image is exists? If so then show it, if not then show the default one --}}
                <?php 
                    $userProfileImage = 'images/' . Auth::user()->image;
                    if (file_exists($userProfileImage)) {
                        $userProfileImagePath = $userProfileImage;
                    } else {
                        $userProfileImagePath = 'images/customer-profile-image/default.png';
                    }
                ?>
                <img src={{ asset($userProfileImagePath) }} class="user-panel-image img-circle elevation-2"
                    alt="User Image">
                <span class="ml-1">{{ Auth::user()->name }}</span>
            </div>
            <ul class="profile-dropdown dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <li class="nav-item">
                    <a class="nav-link text-center" href="{{ route('customer.settings') }}">
                        <i class="nav-icon fas fa-user mr-2"></i>
                        Profile
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-center" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                            document.getElementById('logout-form').submit();">
                        <i class="nav-icon fas fa-power-off mr-1"></i>
                        Logout
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </li>
            </ul>
        </li>
    </ul>
</nav>
<!-- /.navbar -->