// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
//immediately invoked function expression

(function(window){
  var helloSpeaker = {};
  var speakWord1 = "Hello";
//greeting function

  helloSpeaker.speakHello = function (name) {
  console.log(speakWord1 + " " + name);
};

//making local into global
window.helloSpeaker = helloSpeaker;

})(window);

