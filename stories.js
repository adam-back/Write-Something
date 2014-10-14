$(document).ready(function() {
  var ghostSentences = [];

  var getStory = function(storyName) {
    $.get('./Text/' + storyName + '.txt', function(data) {
      var sentences = data.split('.');
      sentences.forEach(function(value, index, array) {
        ghostSentences.push(value + ".");
      });
    });
  };
  
  //loads Siddhartha to begin with as default.
  getStory('Siddhartha');

  $("input[type='radio']").change(function() {
    getStory(this.value);
  });
});