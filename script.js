

    let gameArray =  [
        "Rock", "Paper", "Scissors"
    ]

    let computerChoice;
    let userInput;
    let userScore = 0;
    let computerScore = 0;
    const playerDisplay = document.querySelector("#playerDisplay");
    const compDisplay = document.querySelector("#compDisplay");
    const buttonDisplay = document.querySelector("#playButton");
    let winningScore = 3;
    let isGameOver = false;
    const resultDisplay = document.querySelector("#resultDisplay");
    const finalDisplay = document.querySelector("#finalDisplay");


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
            resultDisplay.textContent = `Draw, ${playerFinal} equals ${computerFinal}`;
            
            return;
        }
        else if (playerFinal == "rock" && computerFinal == "scissors" ||
        playerFinal == "scissors" && computerFinal == "paper" ||
        playerFinal == "paper" && computerFinal == "rock") {
            userScore = userScore + 1;
            resultDisplay.textContent = `You win, ${playerFinal} beats ${computerFinal}`;
            
            return;
        }
        else if (playerFinal == "rock" && computerFinal == "paper" ||
        playerFinal == "scissors" && computerFinal == "rock" ||
        playerFinal == "paper" && computerFinal == "scissors") {
            computerScore = computerScore + 1;
            resultDisplay.textContent = `You lose, ${computerFinal} beats ${playerFinal}`;
            
            return;
        }
    }

    buttonDisplay.addEventListener('click', function() {
        
        if (!isGameOver) {
            
            playRound();
        playerDisplay.textContent = userScore;
        compDisplay.textContent = computerScore;
        if (userScore == winningScore &&  computerScore == winningScore) {
            finalDisplay.textContent = `Draw, ${computerScore} to ${userScore}`;
            isGameOver = true;
            buttonDisplay.innerText = "New Game";
            return;
        }
        else if (computerScore == winningScore) {
            finalDisplay.textContent = `You lose, ${computerScore} to ${userScore}`;
            isGameOver = true;
            buttonDisplay.innerText = "New Game";
            return;
        }
        
        else if (userScore == winningScore) {
            finalDisplay.textContent = `You win, ${userScore} to ${computerScore}`;
            isGameOver = true;
            buttonDisplay.innerText = "New Game";
            return;
        }
        }
        else if(isGameOver) {
            buttonDisplay.innerText = "Play Round";
            isGameOver = false;
            userScore = 0;
            computerScore = 0;
            playRound();
            playerDisplay.textContent = userScore;
        compDisplay.textContent = computerScore;
        finalDisplay.textContent = "";
        }
        

    })
    

       /* function game() {
            userScore = 0;
            computerScore = 0;
           
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

*/


