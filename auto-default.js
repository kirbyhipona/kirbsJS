  $(function () {

            for (i = new Date().getFullYear(); i > 2017; i--) {
                $('#yearpicker').append($('<option />').val(i).html(i));
            }
            for (i = new Date().getFullYear(); i > 2017; i--) {
                $('#yearpicker2').append($('<option />').val(i).html(i));
            }
            for (i = new Date().getFullYear(); i > 2017; i--) {
                $('#rsdyear').append($('<option />').val(i).html(i));
            }
            RSales()
            Inquiries()
            RSDealer()
            $("#showrs").click(function () {
                RSDealer()
            });
            $("#showrecords").click(function () {
                RSales()
            });
            $("#showrecords2").click(function () {
                Inquiries()
            });
            $("#toggle2").click(function (e) {
                e.preventDefault();
                window.chartInstance2.clear();
                window.chartInstance2.data.datasets.forEach(function (ds) {
                    ds.hidden = !ds.hidden;
                    console.log(ds);
                });
                window.chartInstance2.update();

            });
            $("#toggle").click(function (e) {
                e.preventDefault();
                window.chartInstance.data.datasets.forEach(function (ds) {
                    ds.hidden = !ds.hidden;
                });
                window.chartInstance.update();
            });
        });
        function RSDealer() {
            var mdate = $('#rsdyear').val();
            var date = new Date($('#rsdyear').val());
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var getinfo = { year: '' + year + '' };
            $.ajax({
                type: "Post",
                contentType: "application/json; charset=utf-8",
                url: "Default.aspx/ShowRSDealer",
                data: JSON.stringify(getinfo),
                dataType: "json",
                success: function (data) {
                    let res = JSON.parse(data.d);
                    if (!$.trim(data.d)) {
                        toastr.info('No data was found in ' + mdate + '.');
                    }
                    if ($.fn.DataTable.isDataTable("#rsdetails")) {
                        $('#rsdetails').DataTable().clear().destroy();
                    }
                    console.log(res);
                    var table = $("#rsdetails").DataTable({
                        "data": res,
                        "columns": [
                            { 'data': 'ISLAND' },
                            { 'data': 'REGION' },
                            { 'data': 'PARENT_GROUP' },
                            { 'data': 'DealerName' },
                            { 'data': 'JAN' },
                            { 'data': 'FEB' },
                            { 'data': 'MAR' },
                            { 'data': 'APR' },
                            { 'data': 'MAY' },
                            { 'data': 'JUN' },
                            { 'data': 'JUL' },
                            { 'data': 'AUG' },
                            { 'data': 'SEP' },
                            { 'data': 'OCT' },
                            { 'data': 'NOV' },
                            { 'data': 'DEC' },
                            { 'data': 'Total' }
                        ],

                        "responsive": true, "lengthChange": true, "autoWidth": true,
                        "buttons": ["copy", "csv", "excel",
                            {
                                extend: 'pdf',
                                orientation: 'landscape',
                                pageSize: 'LETTER'
                            }
                            , "print", "colvis"]

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
                    });

                },
                complete: function () {

                    $(".loader").LoadingOverlay("hide");

                    //$('#rsdetails tfoot tr').appendTo('#rsdetails thead');
                },
                error: function (data) {
                    toastr.warning("Session abort. The session went something wrong while retrieving data.");
                }

            });

        }
        function RSales() {
            var year = $('#yearpicker').val();
            var getinfo = { year: '' + year + '' };
            let chartInstance;
            $.ajax({
                type: "Post",
                contentType: "application/json; charset=utf-8",
                url: "Default.aspx/ShowRetailSaleDash",
                data: JSON.stringify(getinfo),
                dataType: "json",
                success: function (data) {
                    if (!$.trim(data.d)) {
                        toastr.info('No data was found.' + data.d);
                    }
                    const res = JSON.parse(JSON.stringify(data.d));
                    //console.log(res);
                    var month = [], alto = [], apv = [], carry = [], celerio = [], dzire = [], ciaz = [], ertiga = [],
                        jimny = [], spresso = [], supercarry = [], swift = [], swiftdzire = [], vitara = [],
                        xl7 = [];
                    for (var i = 0; i < res.length; i++) {
                        month.push(res[i]['MONTH'])
                        alto.push(res[i]['ALTO'])
                        apv.push(res[i]['APV'])
                        carry.push(res[i]['CARRY'])
                        celerio.push(res[i]['CELERIO'])
                        dzire.push(res[i]['DZIRE'])
                        ciaz.push(res[i]['CIAZ'])
                        ertiga.push(res[i]['ERTIGA'])
                        jimny.push(res[i]['JIMNY'])
                        spresso.push(res[i]['S_PRESSO'])
                        supercarry.push(res[i]['SUPER_CARRY'])
                        swift.push(res[i]['SWIFT'])
                        swiftdzire.push(res[i]['SWIFT_DZIRE'])
                        xl7.push(res[i]['XL7'])
                    }
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
                    var barChartData = $.extend(true, {}, areaChartData)
                    var temp0 = areaChartData.datasets[0]
                    var temp1 = areaChartData.datasets[1]
                    barChartData.datasets[0] = temp1
                    barChartData.datasets[1] = temp0

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
                        tooltips: {
                            mode: 'label',
                            callbacks: {
                                footer: (tooltipItems, data) => {
                                    let total = tooltipItems.reduce((a, e) => a + parseInt(e.yLabel), 0);
                                    return 'Total: ' + total;
                                }
                            }
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

                    if (window.chartInstance != undefined) {
                        window.chartInstance.destroy();
                    }
                    window.chartInstance = new Chart(stackedBarChartCanvas, {
                        type: 'bar',
                        data: stackedBarChartData,
                        options: stackedBarChartOptions
                    })

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
                    });
                },
                complete: function () {

                    $(".loader").LoadingOverlay("hide");
                    //$('#rsdetails tfoot tr').appendTo('#rsdetails thead');
                },
                error: function (data) {
                    toastr.warning("Session abort. The session went something wrong while retrieving data.");
                }

            });
        }
        function Inquiries() {
            var year = $('#yearpicker2').val();
            var getinfo = { year: '' + year + '' };
            let chartInstance2;
            $.ajax({
                type: "Post",
                contentType: "application/json; charset=utf-8",
                url: "Default.aspx/ShowInquiryDash",
                data: JSON.stringify(getinfo),
                dataType: "json",
                success: function (data) {
                    if (!$.trim(data.d)) {
                        toastr.info('No data was found.' + data.d);
                    }
                    var res = JSON.parse(JSON.stringify(data.d));
                    //console.log(res);
                    var month = [], alto = [], apv = [], carry = [], celerio = [], dzire = [], ciaz = [], ertiga = [],
                        jimny = [], spresso = [], supercarry = [], swift = [], swiftdzire = [], vitara = [],
                        xl7 = [];
                    for (var i = 0; i < res.length; i++) {
                        month.push(res[i]['MONTH'])
                        alto.push(res[i]['ALTO'])
                        apv.push(res[i]['APV'])
                        carry.push(res[i]['CARRY'])
                        celerio.push(res[i]['CELERIO'])
                        dzire.push(res[i]['DZIRE'])
                        ciaz.push(res[i]['CIAZ'])
                        ertiga.push(res[i]['ERTIGA'])
                        jimny.push(res[i]['JIMNY'])
                        spresso.push(res[i]['S_PRESSO'])
                        supercarry.push(res[i]['SUPER_CARRY'])
                        swift.push(res[i]['SWIFT'])
                        swiftdzire.push(res[i]['SWIFT_DZIRE'])
                        xl7.push(res[i]['XL7'])
                    }
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
                    var barChartData = $.extend(true, {}, areaChartData)
                    var temp0 = areaChartData.datasets[0]
                    var temp1 = areaChartData.datasets[1]
                    barChartData.datasets[0] = temp1
                    barChartData.datasets[1] = temp0

                    var stackedBarChartCanvas = $('#stackedBarChart2').get(0).getContext('2d')
                    var stackedBarChartData = $.extend(true, {}, barChartData)

                    var stackedBarChartOptions = {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            datalabels: {
                                display: false,
                            },
                        },
                        tooltips: {
                            mode: 'label',
                            callbacks: {
                                footer: (tooltipItems, data) => {
                                    let total = tooltipItems.reduce((a, e) => a + parseInt(e.yLabel), 0);
                                    return 'Total: ' + total;
                                }
                            }
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
                    if (window.chartInstance2 != undefined) {
                        window.chartInstance2.destroy();
                    }
                    window.chartInstance2 = new Chart(stackedBarChartCanvas, {
                        type: 'bar',
                        data: stackedBarChartData,
                        options: stackedBarChartOptions
                    })
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                },
                beforeSend: function () {
                    $(".loader2").LoadingOverlay("show", {
                        background: "rgba(245, 245, 245, 1)",
                        image: "admin-lte/img/suzukilogo.png",
                        imageAnimation: "1.5s rotate_left",
                        minSize: 50,
                        maxSize: 50
                    });
                },
                complete: function () {

                    $(".loader2").LoadingOverlay("hide");
                    //$('#rsdetails tfoot tr').appendTo('#rsdetails thead');
                },
                error: function (data) {
                    toastr.warning("Session abort. The session went something wrong while retrieving data.");
                }

            });

        }