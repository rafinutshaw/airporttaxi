@extends('layouts.customer')

@section('content')
<div class="content-wrapper">
    <section class="content">
        <div class="container-fluid">
            <div class="row mt-4 justify-content-center">
                <div class="col-12">
                    <div class="row justify-content-center">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title text-dark">Booking History</h3>
                                </div>
                                <div class="card-body">
                                    <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                        <div class="row">
                                            <div class="col-sm-12 table-responsive pt-1">

                                                <table class="table table-bordered table-hover dataTable"
                                                    id="customer-booking-history-table" style="width: 100%">
                                                    <thead class="thead-light">
                                                        <tr role="row">
                                                            <th class="sorting">Id</th>
                                                            <th class="sorting">Customer</th>
                                                            <th class="sorting">Mobile</th>
                                                            <th class="sorting">From</th>
                                                            <th class="sorting">To</th>
                                                            <th class="sorting">Journey Date</th>
                                                            <th class="sorting">Journey Type</th>
                                                            <th class="sorting">Booking Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
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
</div>
@endsection

@section('style')
<style>
</style>
@endsection

@section('scripts')
<script type="application/javascript">
    $(document).ready(function () {

        var x = $('#customer-booking-history-table').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{!! route('customer.booking.history') !!}",
            columns: [{
                    data: 'id',
                    name: 'id'
                },
                {
                    data: 'customer',
                    name: 'customer.name'
                },
                {
                    data: 'mobile',
                    name: 'mobile'
                },
                {
                    data: 'from',
                    name: 'from'
                },
                {
                    data: 'to',
                    name: 'to'
                },
                {
                    data: 'journey_date',
                    name: 'journey_date'
                },
                {
                    data: 'journey_type',
                    name: 'journey_type'
                },
                {
                    data: 'booking_status',
                    name: 'booking_status_id'
                },
                {
                    data: 'action',
                    name: 'action',
                    orderable: false,
                    searchable: false,
                    sortable: false
                }
            ]
        });
    });

</script>
@endsection
