console.log("connected");
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

        })

    }


})