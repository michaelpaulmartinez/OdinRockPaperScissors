console.log("its ya boi boyoyoyoyo");

    let gameArray =  [
        "Rock", "Paper", "Scissors"
    ]

    let computerChoice;
    let userInput;
    let userScore = 0;
    let computerScore = 0;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*gameArray.length);
    return gameArray[randomNumber];

}


    function playRound() {

        computerChoice = getComputerChoice();
        userInput = window.prompt("Enter Rock, Paper or Scissors");

        let computerFinal = computerChoice.toLowerCase();
        let playerFinal = userInput.toLowerCase(); 

        if(playerFinal == "rock" && computerFinal == "rock" ||
        playerFinal == "scissors" && computerFinal == "scissors" ||
        playerFinal == "paper" && computerFinal == "paper") {
            console.log(`Draw, ${playerFinal} equals ${computerFinal}`);
            return;
        }
        else if (playerFinal == "rock" && computerFinal == "scissors" ||
        playerFinal == "scissors" && computerFinal == "paper" ||
        playerFinal == "paper" && computerFinal == "rock") {
            userScore = userScore + 1;
            console.log(`You win, ${playerFinal} beats ${computerFinal}`);
            return;
        }
        else if (playerFinal == "rock" && computerFinal == "paper" ||
        playerFinal == "scissors" && computerFinal == "rock" ||
        playerFinal == "paper" && computerFinal == "scissors") {
            computerScore = computerScore + 1;
            console.log(`You lose, ${computerFinal} beats ${playerFinal}`);
            return;
        }
    }

        function game() {
            userScore = 0;
            computerScore = 0;
            for (let i = 0; i < 5; i++) {
                playRound();
            }
            if (userScore > computerScore) {
                console.log(`You win, ${userScore} to ${computerScore}`);
                return;
            }
            else if (userScore < computerScore) {
                console.log(`You lose, ${computerScore} to ${userScore}`);
                return;
            }
            else if (userScore == computerScore) {
                console.log(`Draw, ${computerScore} to ${userScore}`);
                return;
            }
        }




