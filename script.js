console.log("its ya boi boyoyoyoyo");

    let gameArray =  [
        "Rock", "Paper", "Scissors"
    ]

    let computerChoice;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*gameArray.length);
    return gameArray[randomNumber];
}