//immediately invoked function expression

(function(window){
  var byeSpeaker = {};
   var speakWord2 = "Good Bye";

//Greeting function

byeSpeaker.speakGoodbye = function (name) {
  console.log(speakWord2 + " " + name);
};

//making local into global
window.byeSpeaker = byeSpeaker;
})(window);

