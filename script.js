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
    if(compCHoice!==userChoice){
        initialTries--;
        if(compCHoice>userChoice){
            document.write(`Higher than ${userChoice}`)
            
        }
        else if((compCHoice<userChoice)){
            document.write(`Lower than ${userChoice} `)
        }
        score.innerHTML=`Tries Remaining: ${initialTries}`;
        checkForLoss();
    }
    else if(compCHoice===userChoice){
        document.write(`Congrats, you have guessed the number in ${usedTries}`)
    }
}

function checkForLoss(){
    if(initialTries==0)
    {
        document.write
    }
}