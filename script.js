let playerScore = 0;
let computerScore = 0;


function playerPlay(e) {

    let playerChoice = e.id;
    playGame(playerChoice, computerPlay());
}

function computerPlay() {
    //return 0, 1 or 2 
    //Rock Paper Scissors respectively 
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function playGame(playerChoice, computerChoice) {
    let playText = document.getElementById('playerScoreText');
    let compText = document.getElementById('computerScoreText');
    if(playerChoice == computerChoice) {
        console.log("tie");
        return;
    }
    if((playerChoice == 0 || computerChoice == 0) && (playerChoice == 1 || computerChoice == 1)) {
        if(playerChoice == 1) {
        playText.textContent++;
        }
        else {
             compText.textContent++;
        }
        
    }

    if((playerChoice == 1 || computerChoice == 1) && (playerChoice == 2 || computerChoice == 2)) {
        if(playerChoice == 2) {
        playText.textContent++;
        }
        else {
             compText.textContent++;
        }
        
    }

    if((playerChoice == 2 || computerChoice == 2) && (playerChoice == 0 || computerChoice == 0)) {
        if(playerChoice == 0) {
        playText.textContent++;
        }
        else {
             compText.textContent++;
        }
        
    }

}
