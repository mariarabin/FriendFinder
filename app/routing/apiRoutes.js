
var friendsList = require("../data/friend");
//var newFriend = "";


module.exports = function (app) {

    app.get("/routes/api/friends", function (req, res) {
        res.json(friendsList);
    });


    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/routes/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        var newfriend = req.body;
        var userScore = newfriend.scores;

        //var total = 0;
        //Compute for Match
        var matchName = "";
        var matchPhoto = "";
        var matchdifference = 10000; // Make the initial value big for comparison


        // Calculating totals 
        for (var i = 0; i < friendsList.length; i++) {
            var diff = 0;
            for (var j = 0; j < userScore.length; j++) {
                diff += Math.abs(friendsList[i].friendsList.scores[j] - userScore[j]);


                if (diff <= matchdifference) {
                    matchName = friendsList[i].name,
                        matchPhoto = friendsList[i].photo,
                        matchdifference = diff
                }
            }
        }
        friendsList.push(newfriend);
        res.json({ status: 'OK', matchName: matchName, matchPhoto: matchPhoto });;
        console.log(match);
    });

    // Clear out the table while working with the functionality.
    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendsList.length = 0;
        res.json({ ok: true });
    });
};
