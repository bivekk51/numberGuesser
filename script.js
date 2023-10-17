let usedTries=0;
let compCHoice;
let initialTries=10;
let score=document.getElementById("tries");
setBoard();
function setBoard(){

    score.innerHTML=`Tries Remaining: ${initialTries}`
    compCHoice=Math.floor(Math.random()*100);
}
let levelSelectButtons = document.querySelectorAll("#level");
let gameContainer = document.getElementById("game-container");

// Add a click event listener to each "levelSelect" button
levelSelectButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Hide all "levelSelect" buttons
    levelSelectButtons.forEach(function(button) {
      button.style.display = "none";
    });

    // Show the game container
    showGame();
  });
});

function showGame() {
  gameContainer.style.display = "block";
}
function setLevel(level){
    let score=document.getElementById("tries")
    if(level==1){
        initialTries=10;
        
    }
    else if(level==2){
        initialTries=5;
    }
    else if(level==3){
        initialTries=3;
    }
    score.innerHTML=`Tries Remaining: ${initialTries}`
    
}

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
        checkForLoss();
    }
    else if(compCHoice===userChoice){
        
        score.innerHTML=`You won`;
         message.innerHTML=`Congrats, you have guessed the number in ${usedTries} tries`
         setBoard();
    }
}

function checkForLoss(){
    if(initialTries==0)
    {
        message.innerHTML=`Tries Over You lost, the number was ${compCHoice}`;
        score.innerHTML=`Lost`;
        document.getElementById("input").disabled = true;
        setBoard();
    }
}

