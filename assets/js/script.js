/** 
 * Check that the DOM content has been loaded. 
 * Add event listners to the button 
 * Pass choice into playon function
 */

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("butn");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-choice") === "0") {

            } else if (this.getAttribute("data-choice") === "1") {

            } else if (this.getAttribute("data-choice") === "2") {

            }
            let yourChoice = this.getAttribute("data-choice");

            playGame(yourChoice)
        })

    }
})

/**
 * playGame is the main function where game is played
 * yourchoice entered from screen, computerchoice selected at random 
 * yourchoices, copmuter choice passed to chooseWinner fuction
 * winner is passed to new score to update results
 */
function playGame(yourChoice) {
    const choice = ["rock", "paper", "scissors"]

    const playerImage = document.getElementById("player-image");
    playerImage.src = `assets/images/${choice[yourChoice]}.png`;
    playerImage.alt = choice[yourChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    const computerImage = document.getElementById("computer-image");
    computerImage.src = `assets/images/${choice[computerChoice]}.png`;
    computerImage.alt = choice[computerChoice];

    let winner = chooseWinner(choice[yourChoice], choice[computerChoice]);

    upDateResults(winner);

    newScore(winner);


}


/**
 * This function detemines the winner from choices made
 * @param {choice[yourChoice]*} playerchoice 
 * @param {choice[computerChoice]*} compchoice 
 * @returns 'it's a tie' if choices the same, 'you win' when player wins and 'computer wins' when computer wins
 * choices are checked agaians the rules of the game using if else statements 
 */
function chooseWinner(playerchoice, compchoice) {
    if (playerchoice === compchoice) {
        return "It's a tie!";
    } else if (playerchoice === "rock") {
        if (compchoice === "paper") {
            return "computer wins";
        } else {
            return "you win";
        }

    } else if (playerchoice === "paper") {
        if (compchoice === "scissors") {
            return "computer wins"
        } else {
            return "you win"
        }

    } else if (playerchoice === "scissors") {
        if (compchoice === "rock") {
            return "computer wins"
        } else {
            return "you win"
        }
    }

}

/**
 * This function updates the results.
 * It passes the value of winner into the function, 
 * then this paramater is then used to send an update message to the screen.
 */
function upDateResults(winner) {
    let update = document.getElementById("update");
    if (winner === "It's a tie!") {
        update.innerHTML = `It's a tie! No score change, please try again.`;
        update.style.color = "rgb(107, 171, 211)";
    } else if (winner === "you win") {
        update.innerHTML = `Congratulations, you win!`;
        update.style.color = "RGB(255, 195, 0)";
    } else {
        update.innerHTML = `Aww... the computer wins!`;
        update.style.color = "rgb(236, 136, 96)";
    }
}

/**
 * this function uses the update(winner) results
 * to change and update the score on the screen.  
 */
function newScore(winner) {
    let oldScorePlayer = document.getElementById("score-player");
    let oldScoreCoomputer = document.getElementById("score-computer");
    if (winner === "you win") {
        let newScorePlayer = Number(oldScorePlayer.innerHTML) + 1;
        oldScorePlayer.innerHTML = newScorePlayer;
    } else if (winner === "computer wins") {
        let newScoreComputer = Number(oldScoreCoomputer.innerHTML) + 1;
        oldScoreCoomputer.innerHTML = newScoreComputer;
    }
}