/**
 * Created by franciscopaliouras on 2/11/17.
 */

//submit handdled
$('#search_form').submit(function () {
    return false;
});

$("#search_btn").click(function () {

    $("#graph_body").empty();
    var totString = $("#search_bars").val();

    var strAdd = "";
    strAdd += totString.substr(24,totString.length);
    pullReactionData(strAdd);
    $("#graph_body").append(strAdd);
});



//FB Function----------------------------------------

function login() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            console.log('Logged in.');

            // this function runs when the DOM is ready, i.e. when the document has been parsed
            pullData("Velogig");
            calculateData();

            console.log(dataChart);

            makeData('line', 'line', [dataChart], ['cats', 'dog']);

            makeData('bar', 'bar', [[12, 19, 3, 17, 6, 3, 7, 8, 10, 9, 10, 19], [2, 29, 5, 5, 2, 3, 10]], ['car', 'dog']);

            makeData('pie', 'pie', [[12, 19, 3, 17, 6, 3, 7, 8, 10, 9, 10, 19], [2, 29, 5, 5, 2, 3, 10]], ['car', 'dog']);

            document.getElementById("user-greeting").textContent = "Welcome back, Bart";
        }
        else {
            FB.login();
        }
    });
}









//----------------------------------------------------


//Graph functions----------------------------------------




//----------------------------------------------------