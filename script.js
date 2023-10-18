let usedTries=0;
let compCHoice;
let initialTries=10;
let butt=document.getElementById("btn");
let score=document.getElementById("tries");
let resetBtn=document.getElementById("reset-btn");
setBoard();
function setBoard(){

    score.innerHTML=`Tries Remaining: ${initialTries}`
    compCHoice=Math.floor(Math.random()*100);
    message.innerHTML=`Please guess a number`
}
let levelSelectButtons = document.querySelectorAll("#level");
let gameContainer = document.getElementById("game-container");


levelSelectButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    
    levelSelectButtons.forEach(function(button) {
      button.style.display = "none";
    });
    showGame();
  });
});

function showGame() {
  gameContainer.style.display = "block";
}
function setLevel(level){
    let score=document.getElementById("tries")
    initialTries = (level == 1) ? 10 : (level == 2) ? 5 : (level == 3) ? 3 : 0;
    butt.style.display="inline";
    score.innerHTML=`Tries Remaining: ${initialTries}`
    
}

function handleEnterKey(event) {
    if (event.keyCode === 13) {
      checkNumber();
    }
  }
  document.getElementById("input").addEventListener("keydown", handleEnterKey);

function checkNumber(){
    
    
    let userChoice=parseInt(document.getElementById("input").value);
    let message=document.getElementById("message")
    usedTries++;
    if(compCHoice!==userChoice){
        initialTries--;
        if(compCHoice>userChoice){
            message.innerHTML=`Higher than ${userChoice}`
            
        }
        else if((compCHoice<userChoice)){
            message.innerHTML=`Lower than ${userChoice} `
        }
        score.innerHTML=`Tries Remaining: ${initialTries}`;
        document.getElementById("input").value = "";
        checkForLoss();
    }
    else if(compCHoice===userChoice){
        
        score.innerHTML=`You won`;
         message.innerHTML=`Congrats, you have guessed the number in ${usedTries} tries`
         butt.style.display="none"; 
         resetBtn.style.display="block";
         document.getElementById("input").value = "";
    }
}

function resetGame(){
    levelSelectButtons.forEach(function(button) {
        button.style.display ="inline";
      });
      gameContainer.style.display = "none";
      document.getElementById("input").disabled = false;
      setBoard();
      document.getElementById("input").value = "";
      usedTries=0;
}
function checkForLoss(){
    if(initialTries==0)
    {
        message.innerHTML=`Tries Over You lost, the number was ${compCHoice}`;
        score.innerHTML=`Lost`;
        document.getElementById("input").disabled = true;
        resetBtn.style.display="block";
        butt.style.display="none"; 
    }
}

