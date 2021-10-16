  $(function () {
            //var datatable = $("#rsdetails").DataTable({
            //    "responsive": true, "lengthChange": true, "autoWidth": false,
            //    "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
            //}).buttons().container().appendTo('#rsdetails_wrapper .col-md-6:eq(0)');
            booking()
            $("#showrecords").click(function () {
                booking()

            });
            function booking() {
                var mdate = $('#rsdyear').val();
                var date = new Date($('#rsdyear').val());
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                var getinfo = { month: '' + month + '', year: '' + year + '' };
                $.ajax({
                    type: "Post",
                    contentType: "application/json; charset=utf-8",
                    url: "Booking.aspx/ShowData",
                    data: JSON.stringify(getinfo),
                    dataType: "json",
                    success: function (data) {
                        if (!$.trim(data.d)) {
                            toastr.info('No data was found in ' + mdate +'.');
                        }
                        if ($.fn.DataTable.isDataTable("#rsdetails")) {
                            $('#rsdetails').DataTable().clear().destroy();
                        }
                        $("#rsdetails").DataTable({
                            "data": data.d,
                            "columns": [
                                { 'data': 'CustomerCode' },
                                { 'data': 'DealerName' },
                                { 'data': 'EnquiryNumber' },
                                { 'data': 'INQUIRY_DATE' },
                                { 'data': 'OrderNumber' },
                                { 'data': 'OrderDate' },
                                { 'data': 'InvoiceNo' },
                                { 'data': 'InvoiceDate' },

                                { 'data': 'CustomerType' },
                                { 'data': 'CustomerName' },
                                { 'data': 'CustomerAddress' },
                                { 'data': 'City' },
                                { 'data': 'Province' },
                                { 'data': 'CustomerMobile' },
                                { 'data': 'Model' },
                                { 'data': 'Variant' },
                                { 'data': 'Color' },
                                { 'data': 'SalesType' },
                                { 'data': 'FinancingCompany' },
                                { 'data': 'UnitPrice' },
                                { 'data': 'ReservationFees' },
                            ],
                            "responsive": true, "lengthChange": true, "autoWidth": true,
                            "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"],
                            //"orderCellsTop": true,
                            "fixedHeader": true,
                            "initComplete": function () {
                                this.api().columns().every(function () {
                                    var column = this;
                                    var select = $('<select><option value=""></option></select>')
                                        .appendTo($(column.footer()).empty())
                                        .on('change', function () {
                                            var val = $.fn.dataTable.util.escapeRegex(
                                                $(this).val()
                                            );

                                            column
                                                .search(val ? '^' + val + '$' : '', true, false)
                                                .draw();
                                        });

                                    column.data().unique().sort().each(function (d, j) {
                                        select.append('<option value="' + d + '">' + d + '</option>')
                                    });
                                });
                            }
                        }).buttons().container().appendTo('#rsdetails_wrapper .col-md-6:eq(0)');

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                    },
                    beforeSend: function () {
                        $(".loader").LoadingOverlay("show", {
                            background: "rgba(245, 245, 245, 1)",
                            image: "admin-lte/img/suzukilogo.png",
                            imageAnimation: "1.5s rotate_left",
                            minSize: 50,
                            maxSize: 50
                            //background: "rgba(245, 245, 245, 1)",
                            //image: "",
                            //fontawesome: "fa fa-cog fa-spin"
                        });
                    },
                    complete: function () {

                        $(".loader").LoadingOverlay("hide");
                    },
                    error: function (data) {
                        toastr.warning("Session abort. The session went something wrong while retrieving data.");
                    }
                });
            }
        });