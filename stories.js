$(document).ready(function() {
  var ghostSentences = [];

  //loads Siddhartha to begin with as default.
  $.get('./Text/Siddhartha.txt', function(data) {
    console.log('data', data);
  });

  $("input[type='radio']").change(function() {
    console.log('changed radio button');
  });
});