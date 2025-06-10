// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            }
            else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
            // if (this.getAttribute("data-type") == "addition") {
            //     let operand1 = document.getElementById("operand1");
            //     let operator = document.getElementById("operator");
            //     let operand2 = document.getElementById("operand2");
            //     operand1.innerText = randomNumber;
            //     operand2.innerText = randomNumber2;
            //     operator.innerText = "+";
            // }
        })
    }
})

/** 
 * The main game 'loop', called when the script is first loaded
and after the user's answer has been processed */
function runGame() {

    // Creates two random numbers between 1 and 25
    let randomNumber = Math.floor(Math.random() * 25 + 1);
    let randomNumber2 = Math.floor(Math.random() * 25 + 1);
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}