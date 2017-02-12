function makeData(id,typeParam, dataParam, labelParam){
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: typeParam,
        data: {
            labels: monthChart,
            datasets: [{
                label: labelParam[0],
                backgroundColor: [
                    "#2ecc71",
                    "#3498db",
                    "#95a5a6",
                    "#9b59b6",
                    "#f1c40f",
                    "#e74c3c",
                    "#34495e",
                ],
                data: dataParam[0],
            },
                {
                    label: labelParam[1],
                    data: dataParam[1],
                    backgroundColor: "rgba(255,153,0,0.4)"
                }]
        },
        options:{
            // over all css or design
            legend : {labels: {fontColor: "black",fontSize: 12, fontFamily:"Courier New"}},
            animateScale: true,


            scales:{
                yAxes: [{
                    ticks: {
                        fontFamily:"Courier New",
                        fontColor: "black",
                        fontSize: 15,
                        stepSize: 5,
                        beginAtZero:true
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontFamily: "Courier New",
                        fontColor: "black",
                        fontSize: 15,
                        stepSize: 5,
                        beginAtZero:true
                    }
                }],

            }
        }
    });
}



