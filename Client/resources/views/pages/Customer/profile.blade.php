@extends('layouts.customer')
@section('content')
<div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row mt-4 justify-content-center">
                <div class="col-md-8 justify-content-center">

                    <h3 class="mt-3 text-center">{{ Auth::user()->name }}</h3>
                    <div class="row d-flex justify-content-center">

                        {{-- Starting Profile Image Section --}}
                        <div class="col-md-10">
                            <div class="box box-primary mt-3">
                                <div class="box-body box-profile d-flex-column">
                                    <h3 class="profile-username text-center mb-4">Change Profile Image</h3>
                                    {{-- <img class="d-flex justify-content-center profile-user-img img-responsive img-circle mb-3"
                                        src="{{ Storage::url(Auth::user()->image ) }}" alt="User profile picture"
                                    style="width: 150px"> --}}
                                    <img class="d-flex justify-content-center profile-user-img img-responsive img-circle mb-4"
                                        src="{{ asset('storage/'.Auth::user()->image ) }}" alt="User profile picture"
                                        style="width: 150px">

                                    <form action="{{ route('customer.upload-image') }}" method="post"
                                        enctype="multipart/form-data">
                                        @csrf
                                        <div class="d-flex justify-content-center mb-3">
                                            <div class="input-group profile-image-button">
                                                <div class="custom-file">
                                                    <input type="file" name="image" class="custom-file-input" required>
                                                    <label class="custom-file-label">Choose Image</label>
                                                </div>
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-primary"
                                                        type="submit">Upload</button>
                                                </div>
                                                @if ($errors->first('image'))
                                                <span class="invalid-feedback"
                                                    role="alert">{{ $errors->first('image') }}</span>
                                                @endif
                                            </div>
                                        </div>
                                    </form>

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
                                </div>
                            </div>
                        </div>
                        {{-- Ending Profile Image Section --}}

                        {{-- Starting Profile Section --}}
                        <div class="col-md-10 mt-5 edit-profile">
                            <h3 class="profile-username text-center mb-4">Change Profile Details</h3>

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
                                        value="{{ Auth::user()->name }}">
                                    @if ($errors->first('name'))
                                    <span class="invalid-feedback" role="alert">{{ $errors->first('name') }}</span>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label>Mobile</label>
                                    <input name="mobile" type="text" class="form-control"
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

                            {{-- Success Message --}}
                            <div class="mt-3">
                                @if ($message = Session::get('successfully-profile-updated'))
                                <div class="alert alert-success alert-dismissible fade show">
                                    <button type="button" class="close" data-dismiss="alert">×</button>
                                    <strong>{{ $message }}</strong>
                                </div>
                                @endif
                            </div>
                        </div>
                        {{-- Ending Profile Section --}}

                        {{-- Starting Password Update Section --}}
                        <div class="col-md-10 mt-5 mb-5 edit-profile">
                            <h3 class="profile-username text-center mb-4">Change Password</h3>
                            <form method="POST"
                                action="{{ route('customer.password.update', $id = Auth::user()->id) }}">
                                @csrf @method('PATCH')
                                <div class="form-group">
                                    <label>Current Password</label>
                                    <input name="current-password" type="password" class="form-control" required
                                        placeholder="Current Password">

                                    {{-- @if ($errors->first('current-password'))
                                    <span class="invalid-feedback"
                                        role="alert">{{ $errors->first('current-password') }}</span>
                                    @endif --}}
                                </div>
                                <div class="form-group">
                                    <label>New Password</label>
                                    <input name="new-password" type="password" class="form-control" required
                                        placeholder="new-password">
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input name="confirm-password" type="password" class="form-control" required
                                        placeholder="Confirm Password">
                                </div>
                                <button type="submit" class="btn btn-primary">Update Password</button>
                            </form>

                            {{-- Success Message --}}
                            <div class="mt-3">
                                @if ($message = Session::get('successfully-password-updated'))
                                    <div class="alert alert-success alert-dismissible fade show">
                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                        <strong>{{ $message }}</strong>
                                    </div>
                                @endif
                            </div>

                            {{-- Error Message --}}
                            <div class="mt-3">
                                @if (session('error'))
                                    <div class="alert alert-danger alert-dismissible fade show">
                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                        {{ session('error') }}
                                    </div>
                                @endif
                            </div>
                        </div>
                        {{-- Ending Password Update Section --}}

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
        // setTimeout(function () {
        //     $(".alert").alert('close');
        // }, 3000);
    });

</script>
@endsection

@section('style')
<style>
    .profile-image-button {
        width: 70%;
    }

    .box-body.box-profile.d-flex-column {
        background-color: #f3f3f3eb;
        box-shadow: 0px 2px 10px #999999a3;
        background-color: #fdfdfd96;
        border-radius: 5px;
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .edit-profile {
        background-color: #f3f3f3eb;
        box-shadow: 0px 2px 10px #999999a3;
        background-color: #fdfdfd96;
        border-radius: 5px;
        padding: 30px 50px;
    }

</style>
@endsection
