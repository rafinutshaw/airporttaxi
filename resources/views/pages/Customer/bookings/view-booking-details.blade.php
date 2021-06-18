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
                                    <h3 class="card-title text-dark">
                                        @if ($booking->bookingStatus->status == "Pending")
                                        Upcoming Booking Details #{{ $booking->id }}
                                        @else
                                        Booking Details #{{ $booking->id }}
                                        @endif
                                    </h3>
                                    <div class="card-tools">
                                        <p class="mb-0 badge font-weight-bold" style="font-size: 1rem;">
                                            Status: {{ $booking->bookingStatus->status }}
                                        </p>
                                    </div>
                                </div>
                                <div class="card-body">

                                    <div class="form-row">
                                        <div class="form-group col-md-6 mb-0">
                                            <label class="col-sm-6 col-form-label">From</label>
                                            <p class="booking-data">{{ $booking->from->text }}</p>
                                        </div>
                                        <div class="form-group col-md-6 mb-0">
                                            <label class="col-sm-6 col-form-label">To</label>
                                            <p class="booking-data">{{ $booking->to->text }}</p>
                                        </div>
                                        <div class="form-row">
                                            @if (!empty($booking->via))
                                            <div class="form-group col-md-12 mb-0">
                                                <label class="col-sm-6 col-form-label">Via Routes</label>
                                                <p class="booking-data">
                                                    @foreach ($booking->via as $viaRoute)
                                                    {{ $viaRoute->route->text }},
                                                    @endforeach
                                                </p>
                                            </div>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label class="col-sm-6 col-form-label">Journey Date</label>
                                            <p class="booking-data">
                                                {{ date('l jS \\of F Y h:i:s A', strtotime($booking->journey_date)) }}
                                            </p>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-sm-6 col-form-label">Journey Type</label>
                                            <p class="booking-data">{{ $booking->journey_type }}</p>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-sm-6 col-form-label">Vehicle</label>
                                            <p class="booking-data">{{ $booking->vehicle->type }}</p>
                                        </div>
                                    </div>

                                    @if (!empty($booking->flight_number))
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label class="col-sm-6 col-form-label">Flight Number</label>
                                            <p class="booking-data">{{ $booking->flight_number }}</p>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="col-sm-6 col-form-label">Flight Origin</label>
                                            <p class="booking-data">{{ $booking->flight_origin }}</p>
                                        </div>
                                    </div>
                                    @endif

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label class="col-sm-6 col-form-label">Passengers</label>
                                            <p class="booking-data">{{ $booking->passengers }}</p>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-sm-6 col-form-label">Luggage</label>
                                            <p class="booking-data">{{ $booking->luggage }}</p>
                                        </div>
                                    </div>

                                    <hr>
                                    <div class="form-row">
                                        <table
                                            class="table table-sm table-striped table-hover table-responsive-sm d-flex justify-content-end">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        Sub Total
                                                    </th>
                                                    <td>
                                                        {{ "₤ " . $booking->sub_total }}
                                                    </td>
                                                </tr>
                                                @if ($booking->discount > 0)
                                                <tr>
                                                    <th scope="row">
                                                        Discount
                                                    </th>
                                                    <td>
                                                        {{ "₤ " . $booking->discount }}
                                                    </td>
                                                </tr>
                                                @endif
                                                <tr class="table-primary">
                                                    <th scope="row">Total</th>
                                                    <td>
                                                        {{ "₤ " . $booking->total_price }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Paid amount
                                                    </th>
                                                    <td>
                                                        {{ "₤ " . $booking->paid }}
                                                    </td>
                                                </tr>
                                                @if ($booking->total_due > 0)
                                                <tr class="table-warning">
                                                    <th scope="row">
                                                        Total Due
                                                    </th>
                                                    <td>
                                                        {{ "₤ " . $booking->total_due }}
                                                    </td>
                                                </tr>
                                                @endif
                                            </tbody>
                                        </table>
                                    </div>
                                    <a href="javascript:window.history.back()" class="btn btn-outline-primary">Back to
                                        List
                                    </a>
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