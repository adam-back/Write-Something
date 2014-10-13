$(document).ready(function() {
  $('input').click('#submit', function(event) {
    event.preventDefault();
    var sentence = $('#sentence').val()
    var addSentence = "<span class='userSentence'> " + sentence + "</span>"
    $('div.story').append(addSentence);
    $('#sentence').val(''); 
  });
});
