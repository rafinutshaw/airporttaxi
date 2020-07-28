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
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title text-dark">Upcoming Bookings</h3>
                                </div>
                                <div class="card-body">
                                    <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                        <div class="row">
                                            <div class="col-sm-12 table-responsive">

                                                {{-- Starting Table --}}
                                                <table id="example1" class="table table-bordered table-hover dataTable"
                                                    role="grid" aria-describedby="example1_info">
                                                    <thead class="thead-light">
                                                        <tr role="row">
                                                            <th class="sorting" tabindex="0" aria-controls="example1"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Name: activate to sort column ascending"
                                                                style="width: 130px;">
                                                                Id
                                                            </th>
                                                            <th class="sorting" tabindex="0" aria-controls="example1"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Name: activate to sort column ascending"
                                                                style="width: 130px;">
                                                                Customer
                                                            </th>
                                                            <th class="sorting" tabindex="0" aria-controls="example1"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Name: activate to sort column ascending"
                                                                style="width: 130px;">
                                                                Mobile
                                                            </th>
                                                            <th class="sorting" tabindex="0" aria-controls="example1"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Name: activate to sort column ascending"
                                                                style="width: 130px;">
                                                                From
                                                            </th>
                                                            <th class="sorting" tabindex="0" aria-controls="example1"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Name: activate to sort column ascending"
                                                                style="width: 130px;">
                                                                To
                                                            </th>
                                                            <th class="sorting" tabindex="0" aria-controls="example1"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Name: activate to sort column ascending"
                                                                style="width: 130px;">
                                                                Journey Date
                                                            </th>
                                                            <th class="sorting" tabindex="0" aria-controls="example1"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Name: activate to sort column ascending"
                                                                style="width: 130px;">
                                                                Journey Type
                                                            </th>
                                                            <th class="sorting" tabindex="0" aria-controls="example1"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Name: activate to sort column ascending"
                                                                style="width: 130px;">
                                                                Booking Status
                                                            </th>
                                                            <th class="sorting" tabindex="0" aria-controls="example1"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Name: activate to sort column ascending"
                                                                style="width: 130px;">
                                                                Actions
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @foreach ($upcomingBookings as $indexKey => $upcomingBooking)
                                                        <tr key={{ $indexKey }} role="row" class="odd">
                                                            <td>{{ $upcomingBooking->id }}</td>
                                                            <td>{{ $upcomingBooking->customer->name }}</td>
                                                            <td>{{ $upcomingBooking->mobile }}</td>
                                                            <td>{{ $upcomingBooking->from }}</td>
                                                            <td>{{ $upcomingBooking->to }}</td>
                                                            <td>{{ $upcomingBooking->journey_date }}</td>
                                                            <td>{{ $upcomingBooking->journey_type }}</td>
                                                            <td>{{ $upcomingBooking->bookingStatus->status }}</td>
                                                            <td>
                                                                <a href="{{ route('customer.upcoming.booking.details', $upcomingBooking->id) }}"
                                                                    class="btn btn-sm btn-outline-primary mr-2">View</a>
                                                                <a href=""
                                                                    class="btn btn-sm btn-outline-secondary">Edit</a>
                                                            </td>
                                                        </tr>
                                                        @endforeach
                                                    </tbody>
                                                </table>
                                                {{-- Ending Table --}}

                                            </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-sm-12 col-md-5">
                                                <div class="dataTables_info" id="example1_info" role="status"
                                                    aria-live="polite">
                                                    Showing {{ $upcomingBookings->firstItem() }} to
                                                    {{ $upcomingBookings->lastItem() }} of
                                                    {{ $upcomingBookings->total() }} Upcoming Bookings
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-7">
                                                <div class="dataTables_paginate outline paging_simple_numbers offset-5"
                                                    id="example1_paginate">
                                                    {{ $upcomingBookings->links() }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

@section('style')
<style>
</style>
@endsection
