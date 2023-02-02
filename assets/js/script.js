/**Declare constants varables and DOM elements 
 * and possible choices.
 */
const buttons = document.getElementsByClassName('butn');
const buttonChoice = ['rock', 'paper', 'scissors'];
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const playerScore = document.getElementById('score-player');
const computerScore = document.getElementById('score-computer');
const messages = document.getElementById('messages')




/** Add an event listner for all the buttons 
 */
for (let button of buttons) {
    button.addEventListner('click', function () {
        let playerChoice = this.getAttribute('data-choice');
    })
    gameOn(playerChoice);
}


/**the game function, sets the player and computer choices
 * checks the results 
 * updates the score
 */
function gameOn(playerChoice) {
    playerImage.src = `assets/image/${choices[playerChoice]}.png`;
    playerImaage.alt = buttonChoice[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/image/${choices[computerChoice]}.png`;
    computerImage.alt = buttonChoice[computerChoice];

    console.log('computerChoice');
    console.log('playerChoice')

}