$(document).ready(function() {
  //on page load, store a whole bunch of comments from a popular video on YouTube
  // page for commented videos http://vidstatsx.com/most-commented-videos-all-time
  
  //loads Siddhartha to begin with as default.
  getStory('Siddhartha');

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
    }

    var sentence = "<span class='userSentence'> " + text + "</span>"
    $('div.story').append(sentence);
  };


  var getRandomSentence = function() {
    var randomSentence = "";
    
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    randomSentence = ghostSentences[getRandomArbitrary(20, 700)];
    return randomSentence;
  };  

  var undesiredWords = function(sentence) {
    if(sentence.search("Chapter") >= 0 ||
      sentence.search("Siddhartha") >= 0 ||
      sentence.search("Katniss") >= 0 ||
      sentence.search("Govinda") >= 0 ||
      sentence.search('Gotama') >= 0 ||
      sentence.search("Peter") >= 0 ||
      sentence.search("Wendy") >= 0 ||
      sentence.search("/\'\"") >= 0 ||
      sentence.search(/\?/) >= 0 ){
      return true;
    } else {
      return false;
    }
  };
  
  var writeMagically = function() {
    //randomly pick a ghost sentence
    var magicSentence = getRandomSentence();
    // make sure it does not include the words
    if(undesiredWords(magicSentence)) {
      //get a new sentence
      writeMagically();
    } else {
      addSentence(magicSentence);
    }
  };

  $("input[type='radio']").change(function() {
    //empty ghost sentences for new stuff.
    ghostSentences.splice(0, ghostSentences.length -1);
    getStory(this.value);
  });

  $('#submit').click(function(event) {
    event.preventDefault();
    var userSentence = $('#sentence').val()
    addSentence(userSentence);
    // Reset input field
    $('#sentence').val('');
    writeMagically();
  });
});
