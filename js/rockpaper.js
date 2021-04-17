//CHIFOUMI PROJECT
//VAR :

var choices = ["LIGHTSABER", "BLASTER", "FORCE"];
var skip = ["yes", "no"];
var scores = {"player" : 0, "computer" : 0};
var playerChoice = (choices);
//var game = (playerChoice, computerChoice);

//FUNCTION :

function start() {
    alert("Well then choose your weapon"); // Player s choice
    var playerChoice = prompt (choices).toUpperCase();
    alert("you think the " +playerChoice+ " can help you?");

    alert ("The dark side of the force is a pathway to many abilities some consider to be unnatural") //Computer s choice call by function
    function cpuChoice() {
        var randomIndex = Math.floor(Math.random() * Math.floor(choices.length)); // using Mat.floor and Math.random in the var choices table
        return choices[randomIndex];
        }
    
    var computerChoice = cpuChoice();           //We call the function
    alert("I've chosen " + computerChoice);

    var game = (playerChoice, computerChoice);
    if (playerChoice === computerChoice) {
        alert("The fight is tight");
    }
    else if ((computerChoice === "BLASTER" && playerChoice === "FORCE") || (computerChoice === "LIGHTSABER" && playerChoice === "BLASTER") || (computerChoice === "FORCE" && playerChoice === "LIGHTSABER")){
        alert("The force will always be with you  " + name + "! always");
        scores["player"] += 1;
    }
    else {
        alert("I find your lack of faith disturbing " + name + ".");
        scores["computer"] += 1;
    }
    
}
// Introduction
alert("Welcome young Skywalker"); 

var name = prompt ("Oh you are not a Skywalker! what is your name ?").toUpperCase();
alert("Let me remind you what is THE SITH CHIFOUMI GAME young " + name);
alert("\nROCK = LIGHTSABER " + "\nPAPER = BLASTER" + "\nSCISSORS=FORCE");
alert("Just for once, let me look on you with my own eyes")
alert("Now young " + name +"!!!" + " , you will die ?"); // SHows player name

//Just for fun some random info


//Game start
start();


     
//Showing reslut
    alert("RESULTS : \n" + name + " : " + scores["player"] + "\nDarth Lord : " + scores["computer"]);

    var newgame = prompt ("Let's play again");
if (skip[0]=== true){
    alert("Go back to work!!");
}
else{
    alert("You know you can't defeat the Darth Lord!!"); //Doesn t work yet
}



start();
alert("RESULTS : \n" + name + " : " + scores["player"] + "\nDarth Lord : " + scores["computer"]);

var newgame = prompt ("Let's play again");
if (skip[0]=== true){
alert("Go back to work!!");
}
else{
alert("You know you can't defeat the Darth Lord!!"); //Doesn t work yet
}

start();
alert("RESULTS : \n" + name + " : " + scores["player"] + "\nDarth Lord : " + scores["computer"]);

var newgame = prompt ("Let's play again");
if (skip[0]=== true){
alert("Go back to work!!");
}
else{
alert("You know you can't defeat the Darth Lord!!"); //Doesn t work yet
}

start();
alert("RESULTS : \n" + name + " : " + scores["player"] + "\nDarth Lord : " + scores["computer"]);

var newgame = prompt ("Let's play again");
if (skip[0]=== true){
alert("Go back to work!!");
}
else{
alert("You know you can't defeat the Darth Lord!!"); //Doesn t work yet
}

start();
alert("RESULTS : \n" + name + " : " + scores["player"] + "\nDarth Lord : " + scores["computer"]);

var newgame = prompt ("Let's play again");
if (skip[0]=== true){
alert("Go back to work!!");
}
else{
alert("You know you can't defeat the Darth Lord!!"); //Doesn t work yet
}

start();
alert("RESULTS : \n" + name + " : " + scores["player"] + "\nDarth Lord : " + scores["computer"]);

var newgame = prompt ("Let's play again");
if (skip[0]=== true){
alert("Go back to work!!");
}
else{
alert("You know you can't defeat the Darth Lord!!"); //Doesn t work yet
}

start();
alert("RESULTS : \n" + name + " : " + scores["player"] + "\nDarth Lord : " + scores["computer"]);

var newgame = prompt ("Let's play again");
if (skip[0]=== true){
alert("Go back to work!!");
}
else{
alert("You know you can't defeat the Darth Lord!!"); //Doesn t work yet
}