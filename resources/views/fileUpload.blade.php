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
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>First Name</label>
                                            <input type="text" class="form-control" placeholder="Ex: Harry" autofocus />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Last Name</label>
                                            <input type="text" class="form-control" placeholder="Ex: Potter" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Email</label>
                                            <input type="email" class="form-control"
                                                placeholder="Ex: john@example.com" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Mobile No.</label>
                                            <input type="text" class="form-control" placeholder="Ex: +44 7911 123456" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Address </label>
                                        <input type="text" class="form-control"
                                            placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Driving License</label>
                                            <div class="custom-file">
                                                <input type="file" name="drivingLicense" class="custom-file-input" />
                                                <label class="custom-file-label">Select an img/pdf file</label>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Private Hire Certificate</label>
                                            <div class="custom-file">
                                                <input type="file" name="privateHireCertificate"
                                                    class="custom-file-input" />
                                                <label class="custom-file-label">Select an img/pdf file</label>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Proof of Address</label>
                                                <div class="custom-file">
                                                    <input type="file" name="proofOfAddress"
                                                        class="custom-file-input" />
                                                    <label class="custom-file-label">Select an img/pdf file</label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Insurance Document</label>
                                                <div class="custom-file">
                                                    <input type="file" name="insuranceDocument"
                                                        class="custom-file-input" />
                                                    <label class="custom-file-label">Select an img/pdf file</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Personal Photo (Ratio 1:1)</label>
                                            <div class="custom-file">
                                                <input type="file" name="image" class="custom-file-input" />
                                                <label class="custom-file-label">Select an img file</label>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label>Upload CV</label>
                                                <div class="custom-file">
                                                    <input type="file" name="file" class="custom-file-input"
                                                        aria-describedby="fileHelpId">
                                                    <label class="custom-file-label">Select your CV</label>
                                                    <small id="fileHelpId" class="form-text text-muted">Upload a PDF/DOC
                                                        file not greater than 2 mb.</small>
                                                </div>
                                                @if ($errors->first('file'))
                                                <span class="invalid-feedback"
                                                    role="alert">{{ $errors->first('file') }}</span>
                                                @endif
                                            </div>
                                        </div>

                                    </div>
                            </form>
                            <button type="button" class="btn btn-outline-secondary mr-2">
                                Cancel
                            </button>
                            <button type="submit" class="btn btn-primary">Submit</button>
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
