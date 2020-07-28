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
                                        placeholder="New Password">
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
