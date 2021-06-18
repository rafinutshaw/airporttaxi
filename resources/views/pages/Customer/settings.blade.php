@extends('layouts.customer')

@section('content')

<div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid mt-5">
            @include('includes.customer.success-error')
            <div class="row justify-content-center">

                {{-- Profile Image --}}
                <div class="col-md-3">
                    <div class="card card-primary card-outline">
                        <div class="card-body box-profile laravel-box-shadow">
                            <div class="text-center">
                                {{-- Checking if image is exists? If so then show it, if not then show the default one --}}
                                <?php 
                                    $userProfileImage = 'images/' . Auth::user()->image;
                                    if (file_exists($userProfileImage)) {
                                        $userProfileImagePath = $userProfileImage;
                                    } else {
                                        $userProfileImagePath = 'images/customer-profile-image/default.png';
                                    }
                                ?>
                                <img class="profile-user-img img-fluid img-circle img-responsive rounder"
                                    src="{{ asset($userProfileImagePath) }}" alt="User profile picture"
                                    style="width: 200px; height: 200px; object-fit: cover">
                            </div>

                            <h3 class="profile-username text-center">{{ Auth::user()->name }}</h3>

                            <p class="text-muted text-center">
                                {{-- @foreach (Auth::user()->roles as $role)
                                <span class="badge badge-sm badge-outline-primary">{{ ucfirst($role->name) }}</span>
                                @endforeach --}}
                            </p>

                            <button type="button" id="change-photo" class="btn btn-primary btn-block">
                                <b>Change Image</b>
                            </button>

                            <form id="uploadImage" class="d-flex-row hide" action="{{ route('customer.upload-image') }}"
                                method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="mt-3">
                                    <div>
                                        <div class="custom-file mb-2">
                                            <input type="file" name="image" class="custom-file-input" required>
                                            <label class="custom-file-label">Change Image</label>
                                        </div>
                                        <button class="btn btn-block btn-primary" type="submit"
                                            onclick="showLoading('uploadImage')">Upload</button>
                                        <button id="cancel-image-chance" class="btn btn-block btn-outline-danger"
                                            type="button">Cancel</button>
                                        @if ($errors->first('image'))
                                        <span class="invalid-feedback" role="alert">{{ $errors->first('image') }}</span>
                                        @endif
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
                {{-- Profile Image --}}

                {{-- Change Profile Info --}}
                <div class="col-md-9">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="my-nav-link active" id="pills-personal-info-tab" data-toggle="pill"
                                href="#pills-personal-info" role="tab" aria-controls="pills-personal-info"
                                aria-selected="true">Personal Information</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="my-nav-link" id="pills-change-password-tab" data-toggle="pill"
                                href="#pills-change-password" role="tab" aria-controls="pills-change-password"
                                aria-selected="false">Change Password</a>
                        </li>
                    </ul>
                    <div class="tab-content laravel-box-shadow" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-personal-info" role="tabpanel"
                            aria-labelledby="pills-personal-info-tab">
                            <form method="POST" action="{{ route('customer.profile.update', $id=Auth::user()->id) }}">

                                @csrf @method('PATCH')

                                <div class="form-group">
                                    <label>Email address</label>
                                    <input name="email" type="email" class="form-control" readonly
                                        value="{{ Auth::user()->email }}">
                                </div>
                                <div class="form-group">
                                    <label>Name</label>
                                    <input name="name" type="text" class="form-control" placeholder="Name" required
                                        autofocus value="{{ Auth::user()->name }}">
                                    @if ($errors->first('name'))
                                    <span class="invalid-feedback" role="alert">{{ $errors->first('name') }}</span>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label>Mobile</label>
                                    <input name="mobile" type="tel" class="form-control"
                                        placeholder="Ex: +4407777666666" value="{{ Auth::user()->mobile}}">
                                    @if ($errors->first('mobile'))
                                    <span class="invalid-feedback" role="alert">{{ $errors->first('mobile') }}</span>
                                    @endif
                                </div>

                                <div class="form-group">
                                    <label class="mr-4">Gender</label>
                                    <div class="form-check form-check-inline">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="Male"
                                                value="Male" {{ Auth::user()->gender == 'Male' ? 'checked' : '' }}>
                                            <label class="form-check-label" for="Male">Male</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="Female"
                                                value="Female" {{ Auth::user()->gender == 'Female' ? 'checked' : '' }}>
                                            <label class="form-check-label" for="Female">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary" type="submit">Update Profile</button>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-change-password" role="tabpanel"
                            aria-labelledby="pills-change-password-tab">
                            <form method="POST" action="{{ route('customer.password.update', $id = Auth::user()->id) }}">
                                @csrf @method('PATCH')
                                <div class="form-group">
                                    <label>Current Password</label>
                                    <input name="current-password" type="password" class="form-control" required
                                        placeholder="Current Password" autocomplete="password">
                                </div>
                                <div class="form-group">
                                    <label>New Password</label>
                                    <input name="new-password" type="password" class="form-control" required
                                        placeholder="New Password" autocomplete="password">
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input name="confirm-password" type="password" class="form-control" required
                                        placeholder="Confirm Password" autocomplete="password">
                                </div>
                                <button type="submit" class="btn btn-primary">Update Password</button>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                            aria-labelledby="pills-contact-tab">Other
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- /.content -->
</div>
@endsection

@section('style')
<style>
    .my-nav-link {
        display: block;
        padding: 0.5rem 1rem;
        border-radius: .25rem;
    }

    .my-nav-link.active {
        color: #fff;
        background: #3acae6;
    }

    #pills-tab {
        padding: 0.5rem;
        border-radius: 5px;
        border: 0.2px solid rgb(204 204 204 / 13%);
        background: rgba(0, 0, 0, 0.03);
    }

    #pills-tabContent {
        padding: 1.25rem;
        border-radius: 5px;
        border: 0.2px solid rgb(204 204 204 / 13%);
        background: #fff;
    }
</style>
@endsection

@section('scripts')
<script type="application/javascript">
    $(function () {
        $("#change-photo").click(function (e) { 
            e.preventDefault();
            $(this).addClass("hide");
            $("#uploadImage").removeClass("hide");
        });
        $("#cancel-image-chance").click(function (e) {
            e.preventDefault();
            $("#uploadImage").addClass("hide");
            $("#change-photo").removeClass("hide");
        });

        let imageError = '{{ $errors->first("image") }}';
        if(imageError.length > 0) {
            $("#change-photo").addClass("hide");
            $("#uploadImage").removeClass("hide");
        }
    });
</script>
@endsection