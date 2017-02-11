var idToReaction = {};
var idToPost = {};

function Post(id, time, reactions)
{
    this.id = id;
    this.time = time;
    this.reactions = reactions.length;
}

Post.prototype
{
    constructor:Post;
}

/*
console.log("Love: " + dict["LOVE"]);
console.log("HAHA: " + dict["HAHA"]);
console.log("Wow: " + dict["WOW"]);
console.log("Sad: " + dict["SAD"]);
console.log("Angry: " + dict["ANGRY"]);
*/

function Reactions()
{
    this.reactions = {};
    dict["LOVE"] = 0;
    dict["HAHA"] = 0;
    dict["WOW"] = 0;
    dict["SAD"] = 0;
    dict["ANGRY"] = 0;

    this.interactions = 0;

}

Reactions.prototype
{
    constructor:Reactions;
}

function processResponse(response)
{
    var reactions = {};

    var interactions = 0;

    //for each post in the response
    for(var post in response.posts.data)
    {

        var reaction = new Reactions();

        //if there are any reactions
        if(response.posts.data[post].reactions != undefined) {
            //check all reactions in the post
            for (var reaction in response.posts.data[post].reactions.data) {
                if (response.posts.data[post].reactions.data[reaction] != undefined) {
                    if(response.posts.data[post].reactions.data[reaction].type != "LIKE") {

                        reaction.reactions[response.posts.data[post].reactions.data[reaction].type] += 1;
                    }

                    reaction.interactions += 1;
                }
            }
        }

        var post = new Post(response.posts.data[post].id, response.posts.data[post].time, reaction);
        idToPost[response.posts.data[post].id] = post;

    }


    for( post in idToPost)
    {
        print(post);
        print(idToPost[post].reactions);
    }
    
}

function pullReactionData(url)
{
    var next = url + "/posts?fields=reactions.limit(100),created_time";
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


