<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ route('customer.dashboard') }}" class="brand-link">
        <img src="{{ asset("images/logo.png") }}" alt="Company Logo" class="brand-image" />
        <span class="brand-text font-weight-light">{{ config('app.name') }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
        {{-- <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
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
            </div>
            <div class="info">
                <a href="{{ route('customer.settings') }}" class="d-block">{{ Auth::user()->name }}</a>
            </div>
        </div> --}}
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <a href="{{ route('customer.dashboard') }}" class="nav-link">
                        <i class="nav-icon fas fa-border-all orange"></i>
                        <p>
                            Dashboard
                        </p>
                    </a>
                </li>

                {{-- Starting Booking --}}
                <li class="nav-item has-treeview menu">
                    <a href="{{ route('bookings.index') }}" class="nav-link">
                        <i class="nav-icon fas fa-book"></i>
                        <p>
                            Bookings
                        </p>
                    </a>
                </li>
                {{-- Ending Booking --}}
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
@section('style')
<style>
    .user-panel-image {
        height: 40px !important;
        width: 40px !important;
        object-fit: cover !important;
    }
</style>
@endsection
@section('scripts')
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