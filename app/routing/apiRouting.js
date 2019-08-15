let matchData = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(matchData);
  });

  // I struggled with this part
  app.post('/api/friends', function(req, res) {
    let match = {
      name: '',
      photo: '',
      diff: 1000
    };

    let userData = req.body;
    let userScores = userData.scores;

    let totalDifference = 0;

    for (let i = 0; i < matchData.length; i++) {
      totalDifference = 0;

      for (let j = 0; j < matchData[j].scores[j]; j++) {
        totalDifference += Math.abs(
          parseInt(userScores[j] - parseInt(matchData[i].scores[j]))
        );

        if (totalDifference <= match.diff) {
          match.name = matchData[i].name;
          match.photo = matchData[i].photo;
          match.diff = matchData[i].diff;
        }
      }
    }

    matchData.push(userData);

    res.json(match);
  });
};
