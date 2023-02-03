/** 
 * Check that the DOM content has been loaded. 
 * Add event listners to the button 
 * Pass choice into playon function
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("butn");
    console.log(buttons);
    console.log(buttons[0]);
    console.log(buttons[1]);
    console.log(buttons[2]);

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-choice") === "0") {
                alert("you clicked rock")

            } else if (this.getAttribute("data-choice") === "1") {
                alert("you clicked paper")
            } else if (this.getAttribute("data-choice") === "2") {
                alert("you clicked scissors")
            }
            let yourChoice = this.getAttribute("data-choice");
            console.log(yourChoice);
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
    console.log(choice);
    const playerImage = document.getElementById("player-image");
    playerImage.src = `assets/images/${choice[yourChoice]}.png`;
    playerImage.alt = choice[yourChoice];
    console.log(playerImage);

    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);

    const computerImage = document.getElementById("computer-image");
    computerImage.src = `assets/images/${choice[computerChoice]}.png`;
    computerImage.alt = choice[computerChoice];
    console.log(computerImage);

    console.log(choice[yourChoice], choice[computerChoice]);

    let winner = chooseWinner(choice[yourChoice], choice[computerChoice]);


}

function chooseWinner() {

}

function newScore() {

}