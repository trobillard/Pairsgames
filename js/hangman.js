//HANGMAN
//Declare the Var
const cpuChoice = ["viking", "peaky blinder", "your honor", "stranger things", "lupin", "ghotam", "ragnarok", "norsemen", "titans", "the rain", "the last kingdom", "family business", " spartacus", "sex education", "riverdale", "you", "the walking dead", "snow piercer", "outlander", "the witcher", "the sinner", "umbrella academy", "cobra kai", "lucifer", "homeland", "american horror story"
];
let playerPoints = 7;
let playerArray=[];

//Declare the function
  //Rules
function rules() {
    alert ("Rules: \n* Play individually or in groups. \n* Select a letter of the alphabet (space too!). \n* If the letter is contained in the word you don't loose any point. \n* if not you loose a point. \n* The game continues until : you have point or the word is guessed. \n* You have only 7 points. \n* So good luck");
}
  //Main Menu
function start() {
    alert ("NETFLIX and the Hangman")
    alert ("NETFLIX SERIES  \n+---+\n  |       |\n  |      0\n  |     -+-\n  |       |\n  |      / \\  \n=========")
    let playerChoice = prompt ("What would you like to do ? \nSelect one of those option. \n P=Play \n R=Rules \n Q=Quit" ).toUpperCase(); 
    if(playerChoice === "P") {
        return (randomWord());
    }
    else if(playerChoice === "R") {
        rules();
        return (start());
    }
    else if(playerChoice === "Q") {
        window.close();
    }
    else {
        return (start());
    }
    }
    //Find a Random Word from above list
function randomWord(){
    let random = Math.floor(Math.random() * Math.floor(cpuChoice.length));
    return cpuChoice[random];
};
    //Make Array from words
function makeNewArray(){
    let newArr = Array.from(choiceComputer);
    return newArr;
};
    //To show underscore and no letters
function hideLetter(){
    for(i=0; i < answerArray.length; i++){
      playerArray.push(" _ ");
    }
};
    //Player to chose a letter (one only)
function playerLetter(){
   for(let i = 0; i < 100 ; i++){
    let choicePlayer = prompt("Pick a letter and/or space \n" + playerArray.join());
    
        if (choicePlayer.length === 1){
        return choicePlayer.toLowerCase();
        }

        else if (choicePlayer.length >1){
        alert("one letter only you noob!")
        }
        else{
        alert("Are you giving up?");
        }
   }    
};
    //Compare the letter with the randowords defined above
function compareLetter(){
    if(answerArray.includes(userLetter)){
        for(i = 0; i < answerArray.length; i++){
            if(userLetter === answerArray[i]){ 
              playerArray[i] = userLetter;
            }
        }
    }
    else{
        alert(userLetter+" Is a wrong answer \nLife left : " + (playerPoints -= 1));
        return false;
    }
};    

    //Restart the game
function reStart(){
    let playerDecide = prompt("Do you wanna try one more time ? \n P=Play \n Q=Quit \n+---+\n  |       |\n  |      0\n  |     -+-\n  |       |\n  |      / \\  \n=========").toUpperCase();;
    if (playerDecide === "P"){
        return start();
  }
    else if (playerDecide=== "Q"){
        window.close();
    }
    else {
    return start();
    }
  }

//START
start();
let choiceComputer = randomWord();
let answerArray = makeNewArray();
hideLetter();
  while(playerPoints > 0){
      var userLetter = playerLetter();
     compareLetter();
      if(Object.is(playerArray.toString(), answerArray.toString())){
          break;
      }
      else if(playerPoints === 0){ 
      alert("You are not a NEFTLIX Expert! \nThe series was : " + choiceComputer);
      alert("\n+---+\n  |       |\n  |      0\n  |     -+-\n  |       |\n  |      / \\  \n=========");
      } 
  
  };
  if(Object.is(playerArray.toString(), answerArray.toString())){
      alert("You are a real NERD! " + choiceComputer + " is the correct answer! \nYou better go out and chill with your friends");
  }
reStart();