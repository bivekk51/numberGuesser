let initialTries;
let usedTries=0;

function setLevel(level){
    const score=document.getElementById("tries")
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
    setNumber();
}

function setNumber(){
    let compCHoice=Math.floor(Math.random()*100);
}

function gameLogic(){
    let userChoice=document.getElementById("input").value;
    const message=document.getElementById("message")
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
        message.innerHTML=`Congrats, you have guessed the number in ${usedTries}`
    }
}

function checkForLoss(){
    if(initialTries==0)
    {
        message.innerHTML='Tries Over You lost'
        document.getElementById("input").disabled = true;
        document.getElementById("btn").disabled = true;
    }
}

