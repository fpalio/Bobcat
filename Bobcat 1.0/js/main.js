/**
 * Created by franciscopaliouras on 2/11/17.
 */

//submit handdled
$('#search_form').submit(function () {
    return false;
});

$("#search_btn").click(function () {

    var strAdd = "<h1>";
    strAdd += $("#search_bars").val();
    strAdd += "</h1>"
    $("#graph_body").append(strAdd);
});



//FB Function----------------------------------------




//----------------------------------------------------


//Graph functions----------------------------------------




//----------------------------------------------------