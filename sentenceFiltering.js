var undesiredWords = function(sentence) {
  if(sentence.search("Chapter") >= 0 ||
    sentence.search("Siddhartha") >= 0 ||
    sentence.search("Katniss") >= 0 ||
    sentence.search("Govinda") >= 0 ||
    sentence.search("Kamala") >= 0 ||
    sentence.search('Gotama') >= 0 ||
    sentence.search("Peter") >= 0 ||
    sentence.search("Wendy") >= 0 ||
    sentence.search("Mr.") >= 0 ||
    sentence.search("Ms.") >= 0 ||
    sentence.search("Mrs.") >= 0 ||
    sentence.search("I") >= 0 ||
    sentence.length < 10 ||
    sentence.search(/\?/) >= 0 ){
    return true;
  } else {
    return false;
  }
};