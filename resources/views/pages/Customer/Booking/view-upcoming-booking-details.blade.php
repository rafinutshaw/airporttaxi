@extends('layouts.customer')

@section('content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row mt-4 justify-content-center">
                <div class="col-12">
                    <div class="row justify-content-center">

                        {{-- Table Card --}}
                        <div class="col-md-10 col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title text-dark">Booking Details</h3>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Id</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ $booking->id }}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Customer Name</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ $booking->customer->name }}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Mobile</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ $booking->mobile }}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">From</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ $booking->from }}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">To</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ $booking->to }}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Journey Date</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ $booking->journey_date }}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Journey Type</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ $booking->journey_type }}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Passengers</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ $booking->passengers }}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Luggage</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ $booking->luggage }}">
                                            </div>
                                        </div>

                                        @if (!empty($booking->discount))
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Discount</label>
                                                <div class="col-sm-7">
                                                    <input type="text" readonly class="form-control-plaintext" value="{{ '₤ '. $booking->discount }}">
                                                </div>
                                            </div>
                                        @endif
                                        @if (!empty($booking->passport))
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Passport</label>
                                                <div class="col-sm-7">
                                                    <input type="text" readonly class="form-control-plaintext" value="{{ $booking->passport }}">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Flight Number</label>
                                                <div class="col-sm-7">
                                                    <input type="text" readonly class="form-control-plaintext" value="{{ $booking->flight_number }}">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Flight Origin</label>
                                                <div class="col-sm-7">
                                                    <input type="text" readonly class="form-control-plaintext" value="{{ $booking->flight_origin }}">
                                                </div>
                                            </div>
                                        @endif
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Booking Status</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ $booking->bookingStatus->status }}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Total price</label>
                                            <div class="col-sm-7">
                                                <input type="text" readonly class="form-control-plaintext" value="{{ '₤ '. $booking->total_price }}">
                                            </div>
                                        </div>
                                    </form>
                                    <a href="{{ route('customer.dashboard') }}" class="btn btn-outline-primary">Back to Dashboard</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->

@endsection
