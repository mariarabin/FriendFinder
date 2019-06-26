
var friendsList = require("../data/friend");

module.exports = function (app) {

    app.get("/routes/api/friends", function (req, res) {
        res.json(friendsList);
    });

    // API POST Request
    app.post("/routes/api/friends", function (req, res) {
        var newfriend = req.body;
        var userScore = newfriend.scores;

        //Compute for Match
        var matchName = "";
        var matchPhoto = "";
        var matchdifference = 10000; // Make the initial value big for comparison


        // Calculating 
        for (var i = 0; i < friendsList.length; i++) {
            var diff = 0;
            for (var j = 0; j < userScore.length; j++) {
                console.log("scores------" + friendsList[i].scores[j]);
                //console.log(friendsList.scores.getOwnPropertyNames());

                diff += Math.abs((userScore[j] - friendsList[i].scores[j]));
                console.log("DIFF is" + diff);

                if (diff < matchdifference) {
                    matchName = friendsList[i].name,
                        matchPhoto = friendsList[i].photo,
                        matchdifference = diff
                    console.log("MATCH DIFFERENCE is" + diff);
                }
            }
        }
        friendsList.push(newfriend);
        res.json({ status: 'OK', matchName: matchName, matchPhoto: matchPhoto });;
        console.log(matchName + " and " + matchPhoto);
    });


};
