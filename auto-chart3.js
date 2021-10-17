  $(function () {
            $('#example').DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "ordering": false,
                "info": false,
                "autoWidth": false,
                "responsive": true,
            });
            var table = $('#example3').DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "ordering": false,
                "info": false,
                "autoWidth": false,
                "responsive": true,
            });
            var labels = table.column(0).data().toArray();
            var data = table.column(1).data().toArray();
            const areaChartData = {
                labels: labels,
                datasets: [{
                    label: 'Stocks',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)',
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)'

                    ],
                    borderWidth: 1
                }]
            };
            //-------------
            //- BAR CHART -
            //-------------
            var barChartCanvas = $('#barChart').get(0).getContext('2d')
            var barChartData = $.extend(true, {}, areaChartData)


            var barChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                datasetFill: false
            }

            new Chart(barChartCanvas, {
                type: 'bar',
                data: barChartData,
                options: barChartOptions
            })
            var table = $('#stockaging').DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "ordering": false,
                "info": false,
                "autoWidth": false,
                "responsive": true,
            });
            var month = table.column(0).data().toArray();
            var supercarry = table.column(1).data().toArray();
            var apv = table.column(2).data().toArray();
            var carry = table.column(3).data().toArray();
            var ciaz = table.column(4).data().toArray();
            var ertiga = table.column(5).data().toArray();
            var spresso = table.column(6).data().toArray();
            var jimny = table.column(7).data().toArray();
            var dzire = table.column(8).data().toArray();
            var swift = table.column(9).data().toArray();
            var vitara = table.column(10).data().toArray();
            var celerio = table.column(11).data().toArray();
            var xl7 = table.column(12).data().toArray();


            var areaChartData = {
                labels: month,

                datasets: [
                    //{
                    //    label: 'ALTO',
                    //    backgroundColor: '#001f3f',
                    //    borderColor: 'rgba(60,141,188,0.8)',
                    //    pointRadius: false,
                    //    pointColor: '#3b8bba',
                    //    pointStrokeColor: 'rgba(60,141,188,1)',
                    //    pointHighlightFill: '#fff',
                    //    pointHighlightStroke: 'rgba(60,141,188,1)',
                    //    data: alto
                    //},
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
                    //{
                    //    label: 'SWIFT DZIRE',
                    //    backgroundColor: '#3d9970',
                    //    borderColor: 'rgba(210, 214, 222, 1)',
                    //    pointRadius: false,
                    //    pointColor: 'rgba(210, 214, 222, 1)',
                    //    pointStrokeColor: '#c1c7d1',
                    //    pointHighlightFill: '#fff',
                    //    pointHighlightStroke: 'rgba(220,220,220,1)',
                    //    data: swiftdzire
                    //},
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
                    title: {
                        display: true,
                        text: 'Custom Chart Title'
                    }

                },
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'AGE IN DAYS'
                        }
                    }]
                }
            }

            var chartInstance = new Chart(stackedBarChartCanvas, {
                type: 'horizontalBar',
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
