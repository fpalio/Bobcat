var idToPost = {};
var monthYearToUsers = {};

function Post(id, time, reactions, comments)
{
    this.id = id;
    this.time = time;
    this.reactions = reactions;
    this.comments = comments;
}

function Reactions()
{
    this.reactions = {};
    this.reactions["LOVE"] = 0;
    this.reactions["HAHA"] = 0;
    this.reactions["WOW"] = 0;
    this.reactions["SAD"] = 0;
    this.reactions["ANGRY"] = 0;

    this.users = new Set();

    this.interactions = 0;

}

function Comments()
{   this.users = {};
    this.commentCount = 0;
}

function getItemKey(item){
    return item.created_time.substr(0,7);
}

function processReactions(reaction, data) {
    // /check all reactions in the post
    for (var reaction_id in data.reactions.data) {
        if (data.reactions.data[reaction_id] != undefined) {
            if (data.reactions.data[reaction_id].type != "LIKE") {
                reaction.reactions[data.reactions.data[reaction_id].type] += 1;
                reaction.users.add(data.reactions.data[reaction_id].id);
            }

            addUsers(getItemKey(data), data.reactions.data[reaction_id].id, "reaction");
            reaction.interactions += 1;
        }
    }
}

function addUsers(key, id){
    //if the key doesn't exist create a new dictionary
    if(!monthYearToUsers[key]){
        monthYearToUsers[key] = new Set();
    }


    //add the user
    monthYearToUsers[key].add(id);
}

function processComments(comments, data) {

    //if there are comments available
    if(data.comments != undefined) {

        //response.data[post].comments.data[0].created_time
        //for each comment_id in the comments data

        for (var comment_id in data.comments.data) {

                //get the key (year-month) from data[id of comment]
                var key = getItemKey(data.comments.data[comment_id]);


            //add the the id to the key
                addUsers(key, data.comments.data[comment_id].from.id, "comment");
        }
    }

}

function processResponse(response)
{
    var reactions = {};

    var interactions = 0;

    //for each post in the response
    for(var post in response.data)
    {
        var reaction = new Reactions();
        var comment = new Comments();

        //if there are any reactions
        if(response.data[post].reactions != undefined) {
                processReactions(reaction, response.data[post]);
            }

        processComments(comment, response.data[post]);
        var post_object = new Post(response.data[post].id, response.data[post].created_time, reaction);

        if(!idToPost[response.data[post].id])
        {
            idToPost[response.data[post].id] = new Set();
        }

        idToPost[response.data[post].id].add(post_object);

    }
    
}

function pullData(url)
{
    var next = url + "/posts?fields=reactions,created_time,comments{created_time,from}&limit=100";
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
