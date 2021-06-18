$(document).ready(function() {
    /**
     * Creating global config for Datatables
     */
    $.extend(true, $.fn.dataTable.defaults, {
        processing: true,
        serverSide: true,
        searching: false,
        dom: "Bfrtip",
        colReorder: true,
        select: true,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            ["5 rows", "10 rows", "25 rows", "50 rows", "Show all"]
        ],
        buttons: [
            "pageLength",
            {
                extend: "excelHtml5",
                title: "Excel export",
                text: '<i class="fas fa-file-excel fa-lg"></i>',
                sheetName: "Data export",
                exportOptions: {
                    columns: [-1, ":visible"]
                }
            },
            {
                extend: "pdfHtml5",
                title: "PDF export",
                text: '<i class="fas fa-file-pdf fa-lg"></i>',
                download: "open",
                exportOptions: {
                    columns: [-1, ":visible"]
                }
            },
            {
                extend: "print",
                title: "Print",
                // text: 'Print <i class="fas fa-print fa-lg"></i>',
                text: ` <span data-toggle="tooltip" title="Print">
                                <i class="fas fa-print fa-lg"></i>
                            </span>`,
                exportOptions: {
                    columns: [":visible"]
                }
            },
            // 'colvis',
            {
                extend: "colvis",
                title: "",
                // text: 'Print <i class="fas fa-print fa-lg"></i>',
                text: ` <span data-toggle="tooltip" title="Filter">
                        <i class="fas fa-align-justify fa-lg"></i>
                    </span>`,
                exportOptions: {
                    columns: [-1, ":visible"]
                }
            },
            // Reset Custom Button
            {
                text: 'Reset <i class="fas fa-undo ml-1 "></i>',
                action: function(e, dt, node, config) {
                    e.preventDefault();
                    $("#searchById").length ? $("#searchById").val("") : "";
                    $("#searchByName").length ? $("#searchByName").val("") : "";
                    $("#searchByEmail").length
                        ? $("#searchByEmail").val("")
                        : "";
                    $("#searchByMobile").length
                        ? $("#searchByMobile").val("")
                        : "";
                    $("#searchByDate").length ? $("#searchByDate").val("") : "";
                    $("#status").length
                        ? ($("#status").children()[0].selected = true)
                        : "";
                    dt.ajax.reload();
                }
            }
            // 'searchBuilder'
        ]
    });
});

/**
 * * Refresh Datatables
 */
function refreshDataTables() {
    $(".dataTable").each(function() {
        dt = $(this).dataTable();
        dt.fnDraw();
    });
}

/**
 * * On datatables delete button clicked
 * @param {string} elementId
 */
function onDatatablesDeleteClicked(elementId = "") {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(result => {
        if (result.isConfirmed) {
            $.ajax({
                url: $("#" + elementId).attr("action"),
                type: "POST",
                data: $("#" + elementId).serialize(),
                success: function($success) {
                    Swal.fire({
                        icon: "success",
                        title: "Deleted!",
                        text: $success.message
                    }).then(() => {
                        refreshDataTables();
                    });
                },
                error: function($error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: $error.responseJSON.message
                    });
                }
            });
            return false;
        }
    });
}
