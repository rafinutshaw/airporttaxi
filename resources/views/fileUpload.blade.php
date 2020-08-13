@extends('layouts.app')

@section('content')
<div class="content-wrapper ml-0">
    <div class="row mt-4 justify-content-center">
        <div class="col-12">
            <div class="row justify-content-center">
                <div class="col-sm-12">
                    <section class="banner-area relative join-us" id="home">
                        <div class="overlay overlay-bg"></div>
                        <div class="container">
                            <div class="row d-flex align-items-center justify-content-center">
                                <div class="about-content col-lg-12">
                                    <h1 class="text-white">
                                        Join Us
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="container col-md-6 mt-5 mb-5">
                        <div class="container">

                            <form class="d-flex-row" action="{{ route('store.file') }}" method="post"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>First Name</label>
                                        <input type="text" name="firstName" class="form-control" placeholder="Ex: Harry" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" class="form-control" placeholder="Ex: Potter" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Mobile No.</label>
                                        <input type="text" name="mobile" class="form-control" placeholder="Ex: +44 7911 123456" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Passport No.</label>
                                        <input type="text" name="passport" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Driving License</label>
                                        <input type="text" name="drivingLicense" class="form-control" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Work Permit</label>
                                        <input type="text" name="workPermit" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Address </label>
                                    <input type="text" name="address" class="form-control" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">City</label>
                                        <input type="text" name="city" class="form-control" placeholder="Ex: Bath" />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label>State</label>
                                        <select class="form-control" name="state">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label>Zip</label>
                                        <input type="text" name="zip" class="form-control" placeholder="Ex: 72046" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label>Upload CV</label>
                                        <div class="custom-file">
                                            <input type="file" name="file" class="custom-file-input"  aria-describedby="fileHelpId" required>
                                            <label class="custom-file-label">Select your CV</label>
                                            <small id="fileHelpId" class="form-text text-muted">Upload a PDF/DOC file not greater than 2 mb.</small>
                                        </div>
                                        @if ($errors->first('file'))
                                            <span class="invalid-feedback" role="alert">{{ $errors->first('file') }}</span>
                                        @endif
                                    </div>
                                </div>
                                <button type="button" class="btn btn-outline-secondary mr-2">
                                    Cancel
                                </button>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('style')
<style>
</style>
@endsection
