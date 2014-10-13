$(document).ready(function() {
  $('button').click('#submit', function() {
    var sentence = $('#sentence').val()
    var addSentence = "<span class='userSentence'>" + sentence + "</span>"
    $('div.story').append(addSentence);
  });
});