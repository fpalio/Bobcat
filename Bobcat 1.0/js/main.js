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

    var strAdd = "<h1>";
    strAdd += totString.substr(24,totString.length);
    strAdd += "</h1>"
    $("#graph_body").append(strAdd);
});



//FB Function----------------------------------------

function login() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            console.log('Logged in.');
        }
        else {
            FB.login();
        }
    });
}









//----------------------------------------------------


//Graph functions----------------------------------------




//----------------------------------------------------