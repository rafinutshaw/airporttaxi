@extends('layouts.customer')
@section('title', 'Dashboard')

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
                                    <h3 class="card-title text-dark">
                                        @if(Request::route()->getName() == 'customer.dashboard')
                                        Upcoming Bookings
                                        @elseif(Request::route()->getName() == 'booking.ongoing')
                                        Ongoing Bookings
                                        @elseif (Request::route()->getName() == 'customer.booking.history')
                                        Booking History
                                        @elseif(Request::route()->getName() == 'booking.unpaid.canceled')
                                        Unpaid & Canceled Bookings
                                        @endif
                                    </h3>
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
{{-- For Datatables Starts here--}}
<script src="{{ asset('vendor/datatables/js/jquery.dataTables.min.js') }}"></script>

{{-- Bootstrap 4 --}}
<script src="{{ asset('vendor/datatables/js/dataTables.bootstrap4.min.js') }}"></script>
<script src="{{ asset('vendor/datatables/js/dataTables.buttons.min.js') }}"></script>
<script src="{{ asset('vendor/datatables/js/buttons.bootstrap4.min.js') }}"></script>

{{-- Plugins --}}

{{-- Search Builder --}}
<script src="{{ asset('vendor/datatables/js/dataTables.searchBuilder.min.js') }}"></script>
<script src="{{ asset('vendor/datatables/js/searchBuilder.bootstrap4.min.js') }}"></script>
<script src="{{ asset('vendor/datatables/js/dataTables.dateTime.min.js') }}"></script>

{{-- For Excel --}}
<script src="{{ asset('vendor/datatables/js/jszip.min.js') }}"></script>

<script src="{{ asset('vendor/datatables/js/vfs_fonts.js') }}"></script>

{{-- For Col reorder --}}
<script src="{{ asset('vendor/datatables/js/dataTables.colReorder.min.js') }}"></script>

{{-- For PDF Maker --}}
<script src="{{ asset('vendor/datatables/js/pdfmake.min.js') }}"></script>

{{-- For Buttons --}}
<script src="{{ asset('vendor/datatables/js/buttons.html5.min.js') }}"></script>
<script src="{{ asset('vendor/datatables/js/buttons.print.min.js') }}"></script>
<script src="{{ asset('vendor/datatables/js/buttons.colVis.min.js') }}"></script>

{{-- Select --}}
<script src="{{ asset('vendor/datatables/js/dataTables.select.min.js') }}"></script>
{{-- Creating global config for Datatable --}}

<script type="application/javascript">
</script>
<script type="application/javascript">
    $(document).ready(function () {

        // Globally extending databale
        $.extend(true, $.fn.dataTable.defaults, {
            processing: true,
            serverSide: true,
            dom: 'Bfrtip',
            colReorder: true,
            select: true,
            lengthMenu: [
                [10, 25, 50, -1],
                ['10 rows', '25 rows', '50 rows', 'Show all']
            ],
            buttons: [
                'pageLength',
                {
                    extend: 'excelHtml5',
                    title: 'Data export',
                    text: 'Excel <i class="fas fa-file-excel fa-lg"></i>',
                    sheetName: 'Data export',
                    exportOptions: {
                        columns: [-1, ':visible']
                    }
                },
                {
                    extend: 'pdfHtml5',
                    title: 'Data export',
                    text: 'PDF <i class="fas fa-file-pdf fa-lg"></i>',
                    download: 'open',
                    exportOptions: {
                        columns: [-1, ':visible']
                    }
                },
                {
                    extend: 'print',
                    title: 'Data export',
                    // text: 'Print <i class="fas fa-print fa-lg"></i>',
                    text: ` <span data-toggle="tooltip" title="Print">
                                Print <i class="fas fa-print fa-lg"></i>
                            </span>`,
                    exportOptions: {
                        columns: [-1, ':visible']
                    }
                },
                'colvis',
                // 'searchBuilder'
            ],
        });

        var table = $('#customer-booking-history-table').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{!! route(Request::route()->getName()) !!}",
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
                /*
                 *  Convert 'from' string to json object
                 */
                {
                    data: 'from.text',
                    render: (data) => {
                        return JSON.parse('"' + data + '"')
                    },
                    name: 'from'
                },
                /*
                 *  Convert 'to' string to json object
                 */
                {
                    data: 'to.text',
                    render: function (data) {
                        return JSON.parse('"' + data + '"');
                    },
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
            ]
        });

        // Make every row clickable to view Data
        table.on('select', function (e, dt, type, indexes) {
            var rowData = table.rows(indexes).data().toArray();
            window.location.href = rowData[0].view;
        });
    });

</script>
@endsection