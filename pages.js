var mongoose = require( 'mongoose' ),
    Beer = mongoose.model('Beer');

exports.index = function (req, res) {
  Beer.create({
    Country : "England",
    GroupName: "D",
    CreatedOn: Date.now()
  }, function(err, team) {
    var strOutput;
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    if (err) {
      console.log(err);
      strOutput = 'Oh dear, we\'ve got an error';
    } else {
      console.log('Beer created: ' + team);
      strOutput = team.Country + ' created in Group ' + team.GroupName + '\nat ' + team.CreatedOn;
    }
    res.write(strOutput);
    res.end();
  });
};