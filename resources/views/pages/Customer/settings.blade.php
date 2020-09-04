@extends('layouts.customer')
@section('content')
<div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row mt-4 justify-content-center">
                <div class="col-md-12 justify-content-center">
                    <div class="container emp-profile laravel-box-shadow">
                        <div class="row">
                            {{-- Starting Profile Image Section --}}
                            <div class="col-md-5">

                                {{-- Success Message --}}
                                <div class="container pl-5 pr-5 mt-3">
                                    @if ($message = Session::get('success'))
                                    <div class="alert alert-success alert-dismissible fade show">
                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                        <strong>{{ $message }}</strong>
                                    </div>
                                    {{-- <img src="{{ Session::get('image') }}"> --}}
                                    @endif
                                </div>

                                <div class="profile-img d-flex-row">
                                    {{-- <img class="profile-user-img img-responsive rounder"
                                        src="{{ asset('storage/'.Auth::user()->image ) }}" alt="User profile picture"
                                    style="max-width: 250px; min-width: 250px; max-height: 270px;"> --}}

                                    <?php 
                                        $userProfileImage = 'images/' . Auth::user()->image;
                                        if (file_exists($userProfileImage)) {
                                            $userProfileImagePath = $userProfileImage;
                                        } else {
                                            $userProfileImagePath = 'images/customer-profile-image/default.png';
                                        }
                                    ?>
                                    <img class="profile-user-img img-circle img-responsive rounder"
                                        src="{{ asset($userProfileImagePath) }}" alt="User profile picture"
                                        style="width: 200px; height: 200px; object-fit: cover">
                                </div>
                                <form class="d-flex-row" action="{{ route('customer.upload-image') }}" method="post"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <div class="d-flex justify-content-center mb-3 mt-3">
                                        <div class="input-group profile-image-button">
                                            <div class="custom-file">
                                                <input type="file" name="image" class="custom-file-input" required>
                                                <label class="custom-file-label">Change Image</label>
                                            </div>
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-primary" type="submit">Upload</button>
                                            </div>
                                            @if ($errors->first('image'))
                                            <span class="invalid-feedback"
                                                role="alert">{{ $errors->first('image') }}</span>
                                            @endif
                                        </div>
                                    </div>
                                </form>
                                <div class="container">
                                    <hr>
                                </div>
                                <div class="d-flex-row pl-5 pr-5 container">
                                    <button type="button"
                                        class="btn btn-outline-primary btn-md btn-block change-password"
                                        onclick="window.location = ('{{ route('customer.password.change')}}')">
                                        Change Password
                                        <span><i class="pl-2 fas fa-key"></i></span>
                                    </button>
                                </div>
                            </div>
                            {{-- Ending Profile Image Section --}}

                            {{-- Starting Profile Section --}}
                            <div class="col-md-6">
                                <div class="col-md-11 mt-4 pl-0 edit-profile">

                                    {{-- Success Message --}}
                                    <div class="mt-3">
                                        @if ($message = Session::get('successfully-profile-updated'))
                                        <div class="alert alert-success alert-dismissible fade show">
                                            <button type="button" class="close" data-dismiss="alert">×</button>
                                            <strong>{{ $message }}</strong>
                                        </div>
                                        @endif
                                    </div>

                                    <h4 class="profile-username text-left mb-4">Change Profile Details</h4>

                                    <form method="POST"
                                        action="{{ route('customer.profile.update', $id=Auth::user()->id) }}">

                                        @csrf @method('PATCH')

                                        <div class="form-group">
                                            <label>Email address</label>
                                            <input name="email" type="email" class="form-control" readonly
                                                value="{{ Auth::user()->email }}">
                                        </div>
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input name="name" type="text" class="form-control" placeholder="Name"
                                                required value="{{ Auth::user()->name }}">
                                            @if ($errors->first('name'))
                                            <span class="invalid-feedback"
                                                role="alert">{{ $errors->first('name') }}</span>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Mobile</label>
                                            <input name="mobile" type="text" class="form-control"
                                                placeholder="Ex: +4407777666666" value="{{ Auth::user()->mobile}}">
                                            @if ($errors->first('mobile'))
                                            <span class="invalid-feedback"
                                                role="alert">{{ $errors->first('mobile') }}</span>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label class="mr-4">Gender</label>
                                            <div class="form-check form-check-inline">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="gender" id="Male"
                                                        value="Male"
                                                        {{ Auth::user()->gender == 'Male' ? 'checked' : '' }}>
                                                    <label class="form-check-label" for="Male">Male</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="gender"
                                                        id="Female" value="Female"
                                                        {{ Auth::user()->gender == 'Female' ? 'checked' : '' }}>
                                                    <label class="form-check-label" for="Female">Female</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary" type="submit">Update Profile</button>
                                    </form>
                                </div>
                                {{-- Ending Profile Section --}}
                            </div>
                            {{-- Ending Profile Section --}}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
</div>
@endsection

@section('scripts')
<script type="application/javascript">
    function submit(e) {
        e.preventDefault();
        console.log(document.getElementsByName('Gender')[0].value);
    }

    $(document).ready(function () {
        $('.custom-file-input').change(function () {
            var fileName = $(this).val();
            if (fileName.length) {
                fileName = fileName.replace("C:\\fakepath\\", "");
                if (fileName.length > 14) {
                    fileName = fileName.substring(0, 14) + "...";
                }
                $(this).next('.custom-file-label').html(fileName);
            } else {
                $(this).next('.custom-file-label').html("Choose Image");
            }
        });
    });

</script>
@endsection

@section('style')
<style>
    .input-group.profile-image-button {
        width: 80% !important;
    }

    .emp-profile {
        padding: 4% 0%;
        margin-top: 3%;
        margin-bottom: 3%;
        border-radius: 0.5rem;
        background: #fff;
    }

    .profile-img {
        text-align: center;
    }

    .profile-img img {
        width: 70%;
        height: 100%;
    }

    .profile-img .file {
        position: relative;
        overflow: hidden;
        margin-top: -20%;
        width: 70%;
        border: none;
        border-radius: 0;
        font-size: 15px;
        background: #212529b8;
    }

    .profile-img .file input {
        position: absolute;
        opacity: 0;
        right: 0;
        top: 0;
    }

    .profile-head h5 {
        color: #333;
    }

    .profile-head h6 {
        color: #0062cc;
    }

    .profile-edit-btn {
        border: none;
        border-radius: 1.5rem;
        width: 70%;
        padding: 2%;
        font-weight: 600;
        color: #6c757d;
        cursor: pointer;
    }

    .proile-rating {
        font-size: 12px;
        color: #818182;
        margin-top: 5%;
    }

    .proile-rating span {
        color: #495057;
        font-size: 15px;
        font-weight: 600;
    }

    .profile-head .nav-tabs {
        margin-bottom: 5%;
    }

    .profile-head .nav-tabs .nav-link {
        font-weight: 600;
        border: none;
    }

    .profile-head .nav-tabs .nav-link.active {
        border: none;
        border-bottom: 2px solid #0062cc;
    }

    .profile-work {
        padding: 14%;
        margin-top: -15%;
    }

    .profile-work p {
        font-size: 12px;
        color: #818182;
        font-weight: 600;
        margin-top: 10%;
    }

    .profile-work a {
        text-decoration: none;
        color: #495057;
        font-weight: 600;
        font-size: 14px;
    }

    .profile-work ul {
        list-style: none;
    }

    .profile-tab label {
        font-weight: 600;
    }

    .profile-tab p {
        font-weight: 600;
        color: #0062cc;
    }

</style>
@endsection
