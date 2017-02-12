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
            legend : {labels: {fontColor: "red",fontSize: 12, fontFamily:"Courier New"}},
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
}

function makePie(id, dataParam, labelParam)
{
    var ctx = document.getElementById(id).getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                labelParam[0],
                labelParam[1]
            ],
            datasets: [
                {
                    data: dataParam,
                    backgroundColor: [
                        "#36A2EB",
                        "#FF6384",
                    ],
                    hoverBackgroundColor: [
                        "#36A2EB",
                        "#FF6384",
                    ]
                }]
        },
    });
}



