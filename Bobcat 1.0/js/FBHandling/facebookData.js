var monthChart = [];
var dataChart = [];

function calculateData() {
    monthChart = Object.keys(monthYearToUsers).sort();

    for(var i = 0; i < monthChart.length; i++)
    {
        dataChart[i] = monthYearToUsers[monthChart[i]].size;
    }

}
