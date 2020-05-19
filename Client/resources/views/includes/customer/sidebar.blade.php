<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
        <img src="{{ asset("images/logo.png") }}" alt="Company Logo" class="brand-image" />
        <span class="brand-text font-weight-light">{{ config('app.name') }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                {{-- <img src={{ asset(Auth::user()->image) }} class="img-circle elevation-2" alt="User Image"> --}}
                <img src={{ asset(Auth::user()->image) }} class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">{{ Auth::user()->name }}</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    {{-- <router-link to="/dashboard" class="nav-link">
                        <i class="nav-icon fas fa-border-all orange"></i>
                        <p>
                            Dashboard
                        </p>
                    </router-link> --}}
                    <a href="{{ route('customer.dashboard') }}" class="nav-link active">
                        <i class="nav-icon fas fa-border-all orange"></i>
                        Dashboard
                    </a>
                </li>

                {{-- Starting Booking --}}
                <li class="nav-item has-treeview menu">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-book"></i>
                        <p>
                            Booking
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="fas fa-plus nav-icon"></i>
                                <p>Make Booking</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="fas fa-history nav-icon"></i>
                                <p>Booking History</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="fas fa-calendar-plus nav-icon"></i>
                                <p>Upcoming Booking</p>
                            </a>
                        </li>
                    </ul>
                </li>
                {{-- Ending Booking --}}

                {{-- Starting Profile --}}
                <li class="nav-item has-treeview menu">
                    <a href="#" class="nav-link">
                        <i class="fa fa-user nav-icon"></i>
                        <p>
                            Profile
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="fas fa-plus nav-icon"></i>
                                <p>Update Profile</p>
                            </a>
                        </li>
                    </ul>
                </li>
                {{-- Ending Profile --}}

                <li class="nav-item">
                    <a class="nav-link" href="{{ route('logout') }}" onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
                        <i class="nav-icon fas fa-power-off red"></i>
                        <p> Logout </p>
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>

@section('customer-sidebar-script')
<script type="application/javascript">
    $(document).ready(function () {
        $(".nav-link").click(function () {
            if (!$(this).hasClass('active')) {
                $(".nav-link").removeClass("active");
                $(this).addClass("active");
            }
        });
    });

</script>
@endsection
