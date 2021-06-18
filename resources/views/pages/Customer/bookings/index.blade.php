@extends('layouts.customer')
@section('title', 'Booking List')
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
                                    <h3 class="card-title text-dark">
                                        Booking List
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                        <div class="row">
                                            <div class="col-sm-12 table-responsive pt-1">
                                                <h5>Search Panel</h5>
                                                <div class="row post-search-panel">
                                                    <div class="input-group mb-3 col-md-2 col-sm-4">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-hashtag"></i>
                                                            </span>
                                                        </div>
                                                        <input type="number" class="form-control form-control-sm"
                                                            id="searchById" placeholder="Id" />
                                                    </div>
                                                    <div class="input-group mb-3 col-md-2 col-sm-4">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-id-card"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control form-control-sm"
                                                            id="searchByName" placeholder="Name" />
                                                    </div>
                                                    <div class="input-group mb-3 col-md-2 col-sm-4">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-at"></i>
                                                            </span>
                                                        </div>
                                                        <input type="email" class="form-control form-control-sm"
                                                            id="searchByEmail" placeholder="Email" />
                                                    </div>
                                                    <div class="input-group mb-3 col-md-2 col-sm-4">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-mobile-alt"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control form-control-sm"
                                                            id="searchByMobile" placeholder="Mobile" />
                                                    </div>
                                                    <div class="input-group mb-3 col-md-2 col-sm-4">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-calendar-alt"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control form-control-sm"
                                                            id="searchByDate" placeholder="Date">
                                                    </div>
                                                    <div class="input-group mb-3 col-md-2 col-sm-4">
                                                        <select id="status" class="form-control form-control-sm">
                                                            <option disabled selected>Choose Status</option>
                                                            @foreach (\App\BookingStatus::get(['id', 'status'])
                                                            as $item)
                                                            <option value={{ $item->id }}>{{ $item->status }}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                </div>
                                                <table class="table table-bordered table-hover dataTable"
                                                    id="booking-history-table" style="width: 100%">
                                                    <thead class="thead-light">
                                                        <tr role="row">
                                                            <th class="sorting">Id</th>
                                                            <th class="sorting">Customer</th>
                                                            <th class="sorting">Email</th>
                                                            <th class="sorting">Mobile</th>
                                                            <th class="sorting">From</th>
                                                            <th class="sorting">To</th>
                                                            <th class="sorting">Journey Date</th>
                                                            <th class="sorting">Journey Type</th>
                                                            <th>Booking Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    </tbody>
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

@section('scripts')
@parent
<script type="application/javascript">
    $(document).ready(function () {
        setDatePicker('#searchByDate');

        var table = $('#booking-history-table').DataTable({
            ajax: {
                url: '{!! route(Request::route()->getName()) !!}',
                data: function (d) {
                    return $.extend({}, d, {
                        "searchById": $("#searchById").val(),
                        "searchByName": $("#searchByName").val(),
                        "searchByEmail": $("#searchByEmail").val(),
                        "searchByMobile": $("#searchByMobile").val(),
                        "searchByDate": $("#searchByDate").val(),
                        "filterStatus": $("#status").val()
                    });
                }
            },
            // searching: false,
            columnDefs: [
                { "orderable": false, "targets": 8 }
            ],
            columns: [{
                    data: 'id',
                    name: 'bookings.id'
                },
                {
                    data: 'customer.name',
                    name: 'customer.name'
                },
                {
                    data: 'customer.email',
                    name: 'customer.email'
                },
                {
                    data: 'mobile',
                    name: 'bookings.mobile'
                },
                {
                    data: 'from.text',
                    render: (data) => {
                        return JSON.parse('"' + data + '"')
                    },
                    name: 'bookings.from'
                },
                {
                    data: 'to.text',
                    render: function (data) {
                        return JSON.parse('"' + data + '"');
                    },
                    name: 'bookings.to'
                },
                {
                    data: 'journey_date',
                    name: 'bookings.journey_date'
                },
                {
                    data: 'journey_type',
                    name: 'bookings.journey_type'
                },
                {
                    data: 'booking_status',
                    name: 'booking_status'
                },
            ],
        });

        // table.searchBuilder.container().prependTo(table.table().container());

        // Make every row clickable to view Data
        table.on('select', function (e, dt, type, indexes) {
            var rowData = table.rows(indexes).data().toArray();
            window.location.href = rowData[0].view;
        });

        $('#searchById,#searchByName,#searchByEmail,#searchByMobile,#searchByDate,#status').bind(
            "keyup change clear",
            function () {
                table.draw();
            }
        );

        // Reset table
        $("#resetTable").click(function (e) {
            e.preventDefault();
            $('#searchById').val('');
            $('#searchByName').val('');
            $('#searchByEmail').val('');
            $('#searchByMobile').val('');
            $('#searchByDate').val('');
            $('#status').children()[0].selected = true;
            table.clear().draw();
        });
    });

</script>
@endsection