let matchData = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(matchData);
  });
  // I struggled with this part but after a LOT of console logging, I figured it out
  app.post('/api/friends', function(req, res) {
    let match = {
      name: '',
      photo: '',
      difference: 1000
    };

    // console.log(req.body);

    let userData = req.body;
    let userScores = userData.scores;

    // console.log(userScores);

    let totalDifference = 0;

    for (let i = 0; i < matchData.length; i++) {
      // console.log(matchData[i]);
      totalDifference = 0;

      for (let x = 0; x < matchData[x].scores[x]; x++) {
        // Math.abs returns the value of a number regardless if its negative/positive
        totalDifference += Math.abs(
          parseInt(userScores[x]) - parseInt(matchData[i].scores[x])
        );

        if (totalDifference <= match.difference) {
          match.name = matchData[i].name;
          match.photo = matchData[i].photo;
          match.difference = totalDifference;
        }
      }
    }

    matchData.push(userData);

    res.json(match);
    // console.log(match);
  });
};
