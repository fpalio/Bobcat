/**
 * Created by franciscopaliouras on 2/11/17.
 */

//submit handdled
$('#search_form').submit(function () {
    return false;
});

$("#load").click(function () {

    var $this = $(this);
    $this.button('loading');

    $("#graph_body").empty();
    var totString = $("#search_bars").val();

    var strAdd = "";
    strAdd += totString.substr(totString.indexOf("facebook.com")+"facebook.com".length+1,totString.length);

    if(strAdd.indexOf('/') > -1) {
        strAdd = strAdd.substr(0, strAdd.indexOf('/'));
    }


    if(strAdd !== "")
    {
        pullData(strAdd);
    }

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