    $(function () {
            $(document).on('click', '.bank', function (e) {
                e.preventDefault();
                $('#modal-bank').modal('show');
                var hasdata = $('#tblbank').DataTable().data().any()
                if (!hasdata) {
                    var xhr = $.ajax({
                        type: "Post",
                        contentType: "application/json; charset=utf-8",
                        url: "Chart2.aspx/ShowBank",
                        data: {},
                        dataType: "json",
                        success: function (data) {
                            //console.log(data.d);
                            //if (!$.trim(data.d)) {
                            //    toastr.info('No data was found...');
                            //}
                            if ($.fn.DataTable.isDataTable("#tblbank")) {
                                $('#tblbank').DataTable().clear().destroy();
                            }
                            $("#tblbank").DataTable({
                                "data": data.d,
                                "columns": [
                                    { 'data': 'REGION' },
                                    { 'data': 'DEALER_NAME' },
                                    { 'data': 'LOCATION' },
                                    { 'data': 'INQUIRY_NUM' },
                                    { 'data': 'INQUIRY_DATE' },
                                    { 'data': 'TEAM_LEAD' },
                                    { 'data': 'EMP_CODE' },
                                    { 'data': 'Emp_Name' },
                                    { 'data': 'Customer_Type' },
                                    { 'data': 'Title' },
                                    { 'data': 'Inq_Name' },
                                    { 'data': 'RES_PHONE' },
                                    { 'data': 'MOBILE' },
                                    { 'data': 'EMAIL' },
                                    { 'data': 'PROSPECT_ADDRESS' },
                                    { 'data': 'INQUIRY_CHANGE_DATE' },
                                    { 'data': 'MODEL_DESC' },
                                    { 'data': 'VARIANT_DESC' },
                                    { 'data': 'FINANCIER_NAME' },
                                    { 'data': 'DSA_NAME' },
                                    { 'data': 'STAT' },
                                    { 'data': 'SRCE' },
                                    { 'data': 'SUB_SOURCE' },
                                    { 'data': 'BUYER_TYPE' },
                                    { 'data': 'AGING' },
                                    { 'data': 'PARENT_GROUP' },
                                    { 'data': 'DEALER_MAP_CD' },
                                    { 'data': 'LOC_CD' },
                                    { 'data': 'PROVINCE' },
                                    { 'data': 'BARANGAY' },
                                    { 'data': 'SALES_TYPE' },
                                    { 'data': 'INSURANCE_CHARGES' },
                                ],
                                "responsive": true, "lengthChange": true, "autoWidth": false,
                                "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                            }).buttons().container().appendTo('#tblbank_wrapper .col-md-6:eq(0)');
                        },
                        beforeSend: function () {

                            $(".loader").LoadingOverlay("show", {
                                background: "rgba(245, 245, 245, 1)",
                                image: "admin-lte/img/suzukilogo.png",
                                imageAnimation: "1.5s rotate_left",
                                minSize: 30,
                                maxSize: 30
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
                $('#modal-bank').on('hidden.bs.modal', function () {
                    //kill the request
                    if (!hasdata) {
                        xhr.abort()
                    }
                })
            });
            $(document).on('click', '.application', function (e) {
                e.preventDefault();
                $('#modal-application').modal('show');
                var hasdata = $('#tblapplication').DataTable().data().any()
                if (!hasdata) {
                    var xhr = $.ajax({
                        type: "Post",
                        contentType: "application/json; charset=utf-8",
                        url: "Chart2.aspx/ShowApplication",
                        data: {},
                        dataType: "json",
                        success: function (data) {
                            //console.log(data.d);

                            if ($.fn.DataTable.isDataTable("#tblapplication")) {
                                $('#tblapplication').DataTable().clear().destroy();
                            }
                            $("#tblapplication").DataTable({
                                "data": data.d,
                                "columns": [
                                    { 'data': 'REGION' },
                                    { 'data': 'DEALER_NAME' },
                                    { 'data': 'LOCATION' },
                                    { 'data': 'INQUIRY_NUM' },
                                    { 'data': 'INQUIRY_DATE' },
                                    { 'data': 'TEAM_LEAD' },
                                    { 'data': 'EMP_CODE' },
                                    { 'data': 'Emp_Name' },
                                    { 'data': 'Customer_Type' },
                                    { 'data': 'Title' },
                                    { 'data': 'Inq_Name' },
                                    { 'data': 'RES_PHONE' },
                                    { 'data': 'MOBILE' },
                                    { 'data': 'EMAIL' },
                                    { 'data': 'PROSPECT_ADDRESS' },
                                    { 'data': 'INQUIRY_CHANGE_DATE' },
                                    { 'data': 'MODEL_DESC' },
                                    { 'data': 'VARIANT_DESC' },
                                    { 'data': 'FINANCIER_NAME' },
                                    { 'data': 'DSA_NAME' },
                                    { 'data': 'STAT' },
                                    { 'data': 'SRCE' },
                                    { 'data': 'SUB_SOURCE' },
                                    { 'data': 'BUYER_TYPE' },
                                    { 'data': 'AGING' },
                                    { 'data': 'PARENT_GROUP' },
                                    { 'data': 'DEALER_MAP_CD' },
                                    { 'data': 'LOC_CD' },
                                    { 'data': 'PROVINCE' },
                                    { 'data': 'BARANGAY' },
                                    { 'data': 'SALES_TYPE' },
                                    { 'data': 'INSURANCE_CHARGES' },
                                ],
                                "responsive": true, "lengthChange": true, "autoWidth": false,
                                "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                            }).buttons().container().appendTo('#tblapplication_wrapper .col-md-6:eq(0)');
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
                $('#modal-application').on('hidden.bs.modal', function () {
                    //kill the request
                    if (!hasdata) {
                        xhr.abort()
                    }
                })
            });
            $(document).on('click', '.hot', function (e) {
                e.preventDefault();
                $('#modal-hot').modal('show');
                var hasdata = $('#tblhot').DataTable().data().any()
                if (!hasdata) {
                    var xhr = $.ajax({
                        type: "Post",
                        contentType: "application/json; charset=utf-8",
                        url: "Chart2.aspx/ShowHot",
                        data: {},
                        dataType: "json",
                        success: function (data) {
                            //console.log(data.d);

                            if ($.fn.DataTable.isDataTable("#tblhot")) {
                                $('#tblhot').DataTable().clear().destroy();
                            }
                            $("#tblhot").DataTable({
                                "data": data.d,
                                "columns": [
                                    { 'data': 'REGION' },
                                    { 'data': 'DEALER_NAME' },
                                    { 'data': 'LOCATION' },
                                    { 'data': 'INQUIRY_NUM' },
                                    { 'data': 'INQUIRY_DATE' },
                                    { 'data': 'TEAM_LEAD' },
                                    { 'data': 'EMP_CODE' },
                                    { 'data': 'Emp_Name' },
                                    { 'data': 'Customer_Type' },
                                    { 'data': 'Title' },
                                    { 'data': 'Inq_Name' },
                                    { 'data': 'RES_PHONE' },
                                    { 'data': 'MOBILE' },
                                    { 'data': 'EMAIL' },
                                    { 'data': 'PROSPECT_ADDRESS' },
                                    { 'data': 'INQUIRY_CHANGE_DATE' },
                                    { 'data': 'MODEL_DESC' },
                                    { 'data': 'VARIANT_DESC' },
                                    { 'data': 'FINANCIER_NAME' },
                                    { 'data': 'DSA_NAME' },
                                    { 'data': 'STAT' },
                                    { 'data': 'SRCE' },
                                    { 'data': 'SUB_SOURCE' },
                                    { 'data': 'BUYER_TYPE' },
                                    { 'data': 'AGING' },
                                    { 'data': 'PARENT_GROUP' },
                                    { 'data': 'DEALER_MAP_CD' },
                                    { 'data': 'LOC_CD' },
                                    { 'data': 'PROVINCE' },
                                    { 'data': 'BARANGAY' },
                                    { 'data': 'SALES_TYPE' },
                                    { 'data': 'INSURANCE_CHARGES' },
                                ],
                                "responsive": true, "lengthChange": true, "autoWidth": false,
                                "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                            }).buttons().container().appendTo('#tblhot_wrapper .col-md-6:eq(0)');


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
                $('#modal-hot').on('hidden.bs.modal', function () {
                    //kill the request
                    if (!hasdata) {
                        xhr.abort()
                    }
                })
            });
            $(document).on('click', '.lostsale', function (e) {
                e.preventDefault();
                $('#modal-lostsale').modal('show');
                var hasdata = $('#tbllostsale').DataTable().data().any()
                if (!hasdata) {
                    var xhr = $.ajax({
                        type: "Post",
                        contentType: "application/json; charset=utf-8",
                        url: "Chart2.aspx/ShowLostSale",
                        data: {},
                        dataType: "json",
                        success: function (data) {
                            //console.log(data.d);

                            if ($.fn.DataTable.isDataTable("#tbllostsale")) {
                                $('#tbllostsale').DataTable().clear().destroy();
                            }
                            $("#tbllostsale").DataTable({

                                "data": data.d,
                                "columns": [
                                    { 'data': 'REGION' },
                                    { 'data': 'DEALER_NAME' },
                                    { 'data': 'LOCATION' },
                                    { 'data': 'INQUIRY_NUM' },
                                    { 'data': 'INQUIRY_DATE' },
                                    { 'data': 'TEAM_LEAD' },
                                    { 'data': 'EMP_CODE' },
                                    { 'data': 'Emp_Name' },
                                    { 'data': 'Customer_Type' },
                                    { 'data': 'Title' },
                                    { 'data': 'Inq_Name' },
                                    { 'data': 'RES_PHONE' },
                                    { 'data': 'MOBILE' },
                                    { 'data': 'EMAIL' },
                                    { 'data': 'PROSPECT_ADDRESS' },
                                    { 'data': 'INQUIRY_CHANGE_DATE' },
                                    { 'data': 'MODEL_DESC' },
                                    { 'data': 'VARIANT_DESC' },
                                    { 'data': 'FINANCIER_NAME' },
                                    { 'data': 'DSA_NAME' },
                                    { 'data': 'STAT' },
                                    { 'data': 'SRCE' },
                                    { 'data': 'SUB_SOURCE' },
                                    { 'data': 'BUYER_TYPE' },
                                    { 'data': 'AGING' },
                                    { 'data': 'PARENT_GROUP' },
                                    { 'data': 'DEALER_MAP_CD' },
                                    { 'data': 'LOC_CD' },
                                    { 'data': 'PROVINCE' },
                                    { 'data': 'BARANGAY' },
                                    { 'data': 'SALES_TYPE' },
                                    { 'data': 'INSURANCE_CHARGES' },
                                ],
                                "responsive": true, "lengthChange": true, "autoWidth": false,
                                "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                            }).buttons().container().appendTo('#tbllostsale_wrapper .col-md-6:eq(0)');


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
                $('#modal-lostsale').on('hidden.bs.modal', function () {
                    //kill the request
                    if (!hasdata) {
                        xhr.abort()
                    }
                });
            });
            var table = $('#example2').DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "ordering": false,
                "info": false,
                "autoWidth": false,
                "responsive": true,
            });
            var month = table.column(1).data().toArray();
            var alto = table.column(2).data().toArray();
            var apv = table.column(3).data().toArray();
            var carry = table.column(4).data().toArray();
            var celerio = table.column(5).data().toArray();
            var ciaz = table.column(6).data().toArray();
            var ertiga = table.column(7).data().toArray();
            var jimny = table.column(8).data().toArray();
            var spresso = table.column(9).data().toArray();
            var supercarry = table.column(10).data().toArray();
            var swift = table.column(11).data().toArray();
            var dzire = table.column(12).data().toArray();
            var swiftdzire = table.column(13).data().toArray();
            var vitara = table.column(14).data().toArray();
            var xl7 = table.column(15).data().toArray();

            var areaChartData = {
                labels: month,
                datasets: [
                    {
                        label: 'ALTO',
                        backgroundColor: '#001f3f',
                        borderColor: 'rgba(60,141,188,0.8)',
                        pointRadius: false,
                        pointColor: '#3b8bba',
                        pointStrokeColor: 'rgba(60,141,188,1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        data: alto
                    },
                    {
                        label: 'APV',
                        backgroundColor: '#17a2b8',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: apv
                    },
                    {
                        label: 'CARRY',
                        backgroundColor: '#dc3545',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: carry
                    },
                    {
                        label: 'CELERIO',
                        backgroundColor: '#6c757d',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: celerio
                    },
                    {
                        label: 'CIAZ',
                        backgroundColor: '#f012be',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: ciaz
                    },
                    {
                        label: 'ERTIGA',
                        backgroundColor: '#e83e8c',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: ertiga
                    },
                    {
                        label: 'JIMNY',
                        backgroundColor: '#d81b60',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: jimny
                    },
                    {
                        label: 'S PRESSO',
                        backgroundColor: '#ff851b',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: spresso
                    },
                    {
                        label: 'SUPER CARRY',
                        backgroundColor: '#01ff70',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: supercarry
                    },
                    {
                        label: 'SWIFT',
                        backgroundColor: '#39cccc',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: swift
                    },
                    {
                        label: 'DZIRE',
                        backgroundColor: '#007bff',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: dzire
                    },
                    {
                        label: 'SWIFT DZIRE',
                        backgroundColor: '#3d9970',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: swiftdzire
                    },
                    {
                        label: 'VITARA',
                        backgroundColor: '#28a745',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: vitara
                    },
                    {
                        label: 'XL7',
                        backgroundColor: '#ffc107',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: xl7
                    },
                ]
            }
            //-------------
            //- BAR CHART -
            //-------------

            var barChartData = $.extend(true, {}, areaChartData)
            var temp0 = areaChartData.datasets[0]
            var temp1 = areaChartData.datasets[1]
            barChartData.datasets[0] = temp1
            barChartData.datasets[1] = temp0

            //---------------------
            //- STACKED BAR CHART -
            //---------------------
            var stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d')
            var stackedBarChartData = $.extend(true, {}, barChartData)

            var stackedBarChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        display: false,
                    },
                },
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }

            var chartInstance = new Chart(stackedBarChartCanvas, {
                type: 'bar',
                data: stackedBarChartData,
                options: stackedBarChartOptions
            })
            $("#toggle").click(function (e) {
                e.preventDefault();
                chartInstance.data.datasets.forEach(function (ds) {
                    ds.hidden = !ds.hidden;
                });
                chartInstance.update();
            });
        })