var ghostSentences = [];

var getStory = function(storyName) {
  var textURL = './Text/' + storyName + '.txt';
  $.ajax({
    url: textURL,
    success: function(data) {
      var sentences = data.split('.');
      sentences.forEach(function(value, index, array) {
        ghostSentences.push(value + ".");
      });
    },
    error: function(error) {
      console.error('There was an error retrieving the story: ' + error);
    }
  });
};




