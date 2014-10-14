var comments;
  // English, limit swearing
var vettedComments;
//YouTube video codes for top-five most commented videos of all time.
var mostCommentedVideos = ['_OBlgSz8sSM', "dMH0bHeiRNg", 'kffacxfA7G4', "7AVHXe-ol-s", 'Hr0Wv5DJhuk'];

var getRandomVideoCode = function() {
  var randomVideoCode = "";
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  randomVideoCode = mostCommentedVideos[getRandomArbitrary(0, 5)];
  return randomVideoCode;
};  

var getComments = function(videoCode) {
  $.ajax({
    type: 'GET',
    url: "https://gdata.youtube.com/feeds/api/videos/" + videoCode + "/comments?orderby=published",
    success: function(data) {
      comments = $(data).find('content');
    },
    error: function(error) {
      console.error(error);
    }
  });
};

getComments(getRandomVideoCode());