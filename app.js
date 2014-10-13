$(document).ready(function() {
  //on page load, store a whole bunch of comments from a popular video on YouTube
  // page for commented videos http://vidstatsx.com/most-commented-videos-all-time
  var comments;
  $.ajax({
    type: 'GET',
    url: "https://gdata.youtube.com/feeds/api/videos/_OBlgSz8sSM/comments?orderby=published",
    success: function(data) {
      comments = data;
      console.log(comments);
    },
    error: function(error) {
      console.error(error);
    }
  });

  $('input').click('#submit', function(event) {
    event.preventDefault();
    var sentence = $('#sentence').val()
    var addSentence = "<span class='userSentence'> " + sentence + "</span>"
    $('div.story').append(addSentence);
    $('#sentence').val('');
    //get sentence to add using API
    //append it to the DOM 
  });
});
