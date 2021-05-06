/*=========================================================================================
    File Name: polar.js
    Description: Chartjs polar chart
    ----------------------------------------------------------------------------------------
    Item Name: ACTCMS Template
    Version: 1.0.0
    Author: ACTCMS
    Author URL: httpa://actcms.work
==========================================================================================*/

// Polar chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#polar-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Polar Area Chart'
        },
        scale: {
          ticks: {
            beginAtZero: true
          },
          reverse: false
        },
        animation: {
            animateRotate: false
        }
    };

    // Chart Data
    var chartData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
            data: [65, 59, 80, 81, 56],
            backgroundColor: ['#666EE8', '#28D094', '#FF4961','#1E9FF2', '#FF9149'],
            label: 'My dataset' // for legend
        }],
    };

    var config = {
        type: 'polarArea',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var polarChart = new Chart(ctx, config);
});