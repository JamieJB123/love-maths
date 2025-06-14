// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
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

    document.getElementById("answer-box").addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            checkAnswer();
        }
    })

    // Inside DOM content loaded event listener as this will be the default game when page loads
    runGame("addition");
})

/** 
 * The main game 'loop', called when the script is first loaded
and after the user's answer has been processed */
function runGame(gameType) {
    
    // Resets answer box
    document.getElementById("answer-box").value = "";
    // Focuses cursor on answer box
    document.getElementById("answer-box").focus();
    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num1);
    }
    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
    
}
/**Checks answer against the first element in the returned
 * calculatedCorrectAnswer array
 */
function checkAnswer() {
    // Have to use 'value' as it is an input element (therefore cannot use inner text)
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}


/**
 * Gets operands and operator directly from the DOM, and returns correct number.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    
    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    }
    else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}. Aborting!`;
    }
    
}
/**Gets current score from DOM and increments by 1 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**Gets current incorrect score from DOM and increments by 1 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x"
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 * Math.floor(Math.random() * 25 + 1);
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}