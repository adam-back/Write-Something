$(document).ready(function() {
  //on page load, store a whole bunch of comments from a popular video on YouTube
  // page for commented videos http://vidstatsx.com/most-commented-videos-all-time
  var comments;
  // English, limit swearing
  var vettedComments;

  $.ajax({
    type: 'GET',
    url: "https://gdata.youtube.com/feeds/api/videos/_OBlgSz8sSM/comments?orderby=published",
    success: function(data) {
      comments = $(data).find('content');
    },
    error: function(error) {
      console.error(error);
    }
  });

  $('#submit').click(function(event) {
    event.preventDefault();
    var userSentence = $('#sentence').val()
    addSentence(userSentence);
    // Reset input field
    $('#sentence').val('');
  });

  var addSentence = function(text) {
    // look for ending punctuation
    switch(text.charAt(text.length - 1)) {
      case '.':
        break;
      case '!':
        break;
      case '?':
        break;
      default: 
        // if no ending punctuation, add some
        text = text + ".";
    };

    var sentence = "<span class='userSentence'> " + text + "</span>"
    $('div.story').append(sentence);
  };

  var writeMagically = function() {
    var comment = comments[0].innerHTML;
    addSentence(comment);
  };

});
