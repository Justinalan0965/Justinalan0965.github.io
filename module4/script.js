
//Array initialization
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

//Iteration of names using for loop

for (var i=0;i<names.length;i++) {

 //storing the first letter of the name into the variable
  var firstLetter = names[i].charAt(0).toLowerCase();
  
  if (firstLetter == "j") {
   
    //calling byeSpeaker function 
    byeSpeaker.speakGoodbye(names[i]);
  } 
  else {

    //calling helloSpeaker function
    helloSpeaker.speakHello(names[i]);
  }
};
