let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber)

function checkGuess() {

    let gussedNumber = parseInt(userInput.value);
    

    if (gussedNumber > randomNumber){
        gameResult.textContent = "Too High ,Try Again .(വീണ്ടും ശ്രമിക്കു 🤗)";
        gameResult.style.backgroundColor = "#f2190a";
    }
    else if (gussedNumber < randomNumber){
        gameResult.textContent = "Too Low ,Try Again .(വീണ്ടും ശ്രമിക്കു 🤗"
        gameResult.style.backgroundColor = "#e8f55d";
    }
    else if(gussedNumber === randomNumber){
        gameResult.textContent = "Congratulations U got it right..നിങ്ങൾ ജയിച്ചു 💐";
        gameResult.style.backgroundColor = "#07fa50";
    }

    else{
        gameResult.textContent = "Provide a Valid Number"
        gameResult.style.backgroundColor = "#6d6e63";
    }
 
}