/** 
 * Check that the DOM content has been loaded. 
 * Add event listners to the button 
 * Pass choice into game area
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
            playOn(yourChoice)
        })

    }
})

function playOn(yourChoice) {
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


}