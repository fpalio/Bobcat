var chartUsers;

function makeData(id,typeParam, dataParam, labelParam){
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: typeParam,
        data: {
            labels: monthChart,
            datasets: [{
                label: labelParam[0],
                data: dataParam[0],
                backgroundColor: "rgba(204,0,0,0.4)"
            },
                {
                    label: labelParam[1],
                    data: dataParam[1],
                    backgroundColor: "rgba(255,128,0,0.4)"
                }]
        },
        options:{

            // over all css or design
            legend : {labels: {fontColor: "black",fontSize: 14, fontFamily:"Courier New"}},
            animateScale: true,


            scales:{
                yAxes: [{
                    ticks: {
                        fontFamily:"Courier New",
                        fontColor: "black",
                        fontSize: 15,
                        ticks : 10000000000000000000,
                        beginAtZero:true
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontFamily: "Courier New",
                        fontColor: "black",
                        fontSize: 15,
                        beginAtZero:true
                    }
                }],

            }
        }
    });

    return myChart;
}

function makePie(id, dataParam, labelParam)
{
    var ctx = document.getElementById(id).getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labelParam,
            datasets: [
                {
                    data: dataParam,
                    backgroundColor: [
                        "#36A2EB",
                        "#ff258c",
                        "#fffa2b",
                        "#31ff32",
                        "#ff5f1c",
                    ],
                    hoverBackgroundColor: [
                        "#2c76a9",
                        "#b01c5c",
                        "#c1bc23",
                        "#29cf2a",
                        "#ae4216",
                    ]
                }]
        },
    });
}



