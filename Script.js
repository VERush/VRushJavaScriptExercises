// Exercise One

var promptText = "Enter a Number";
var inputNumber = prompt(promptText);
var output = 0;

for (var i=0; i<=inputNumber; i++) {
output = output + i;
}

console.log(output);

//Exercise Two

var gameText = "Do you want to play?";
var gameText2 = "Do you want to play again?";
var game;
var stringText = "Enter a word.";
var output = "";
game = prompt(gameText);

if (game == "Yes") {
  do {
    output = output + prompt(stringText) + " ";
	  game = prompt(gameText2);
    }
  while (game == "Yes");
  }
console.log(output);
		

//Exercise Three

var nameText = "Would you like to print your name?";
var nameText2 = "Would you like to print this again?";
var namePrompt = "Please enter your name."
var name = prompt(namePrompt);
var output = "";

printName = prompt(nameText);

if (printName == "Yes") {
	output = "Hello. My name is " + name;
  console.log(output);
  printName = prompt(nameText2);
  
  while (printName == "Yes") {
    output = output + "!";
    console.log(output);
    printName = prompt(nameText2);
  }
}


//Exercise Four

var timeText = "What time of day is it?";
var timeOfDay = prompt(timeText);

if (timeOfDay == "morning") {
	console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
} else if (timeOfDay == "noon") {
	console.log("Since it is noon, you should be eating lunch. We suggest a salad.");
} else if (timeOfDay == "evening") {
	console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
} else {
  console.log("Go to bed");
}









