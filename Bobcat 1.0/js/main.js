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



function processResponse(response)
{
    // Tengo post { comments ,
    // reactions}

    var dict = {};
    var interactions = 0;

    dict["LOVE"] = 0;
    dict["HAHA"] = 0;
    dict["WOW"] = 0;
    dict["SAD"] = 0;
    dict["ANGRY"] = 0;


    for(var post in response.posts.data)
    {
        if(response.posts.data[post].reactions != undefined) {
            for (var reaction in response.posts.data[post].reactions.data) {
                if (response.posts.data[post].reactions.data[reaction] != undefined) {
                    if(response.posts.data[post].reactions.data[reaction].type != "LIKE") {
                        dict[response.posts.data[post].reactions.data[reaction].type] += 1;
                    }

                    interactions += 1;
                }
            }
        }

    }

    console.log("Love: " + dict["LOVE"]);
    console.log("HAHA: " + dict["HAHA"]);
    console.log("Wow: " + dict["WOW"]);
    console.log("Sad: " + dict["SAD"]);
    console.log("Angry: " + dict["ANGRY"]);

    console.log("Total Interactions: " + interactions);

    //query data from JSON. After we move to the backend this should be done using a library to optimize code


}




function request() {
    var next = "/20528438720/posts?fields=reactions.limit(20)";
    FB.api(
        next,
        function (response) {
            if (response && !response.error) {
                processResponse(response);
                //next = response.paging.next.replace("https://graph.facebook.com/v2.8","");
            }
        }
    );
}



//----------------------------------------------------


//Graph functions----------------------------------------




//----------------------------------------------------