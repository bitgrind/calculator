//var sentence = prompt("Please write a sentence.");

var sentence = prompt("Please write a sentence");
var sentenceLength = sentence.length - 1;
var firstLetter = sentence[0].toUpperCase();
var lastLetter = sentence[sentenceLength].toUpperCase();
var middleLetter = sentence[Math.ceil(sentenceLength/2)];

//Cap first and last letter
function firstandLastLetter(sentence) {
  firstLetter = sentence[0].toUpperCase();
  lastLetter = sentence[sentenceLength].toUpperCase();
  return firstLetter + lastLetter;
}
//alert(firstandLastLetter(sentence));

//Reverse Order: Last + First
function reverseOrder(sentence) {
  return lastLetter + firstLetter;
}
//alert(reverseOrder(sentence));

//Middle letter at the begining
function middleLetterf(sentence) {
  var reverseStrings = middleLetter + sentence + lastLetter + firstLetter;
  return reverseStrings;
}

//reverseOrder letters
function loop(x) {
  var emptyString = "";
  console.log('loop');
  for(k = 15; k >= 0; k--){
    emptyString += x.charAt(k);
  }
  console.log(emptyString);
}
loop(middleLetterf(sentence));

//fourthReverse = middleLetter(sentence);
//reverseOrderString = fourthReverse;
//console.log($(reverseOrderString).reverse());
