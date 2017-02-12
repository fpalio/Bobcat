var monthChart = [];
var dataChart = [];
var dataIntChart = [];
var genderData = [];

function calculateData() {
    monthChart = Object.keys(monthYearToUsers).sort();

    for(var i = 0; i < monthChart.length; i++)
    {
        dataChart[i] = monthYearToUsers[monthChart[i]].size;
        dataIntChart[i] = monthYearToInteractions[monthChart[i]];
    }

    genderData[0] = 0;
    genderData[1] = 0;
}

function getFacebookGenderAge()
{


}
