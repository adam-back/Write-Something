$(document).ready(function() {
  var ghostSentences = [];

  //loads Siddhartha to begin with as default.
  $.get('./Text/Siddhartha.txt', function(data) {
    var sentences = data.split('.');
    sentences.forEach(function(value, index, array) {
      ghostSentences.push(value + ".");
    });
  });

  $("input[type='radio']").change(function() {
    console.log('changed radio button');
  });
});