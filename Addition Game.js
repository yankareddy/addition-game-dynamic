let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let firstNumberValue = Math.ceil(Math.random() * 100);
firstNumber.textContent = firstNumberValue;
let secondNumberValue = Math.ceil(Math.random() * 100);
secondNumber.textContent = secondNumberValue;

function checkButton() {
    let userInputValue = parseInt(userInput.value);
    let sum = parseInt(firstNumberValue) + parseInt(secondNumberValue);
    if (sum === userInputValue) {
        gameResultElement.style.backgroundColor = "#028a0f";
        gameResultElement.textContent = "correct";
    } else {
        gameResultElement.style.backgroundColor = "#1e217c";
        gameResultElement.textContent = "wrong";

    }
}

function restartButton() {
    firstNumberValue = Math.ceil(Math.random() * 100);
    secondNumberValue = Math.ceil(Math.random() * 100);
    firstNumber.textContent = firstNumberValue;
    secondNumber.textContent = secondNumberValue;
    gameResultElement.backgroundColor = "";
    gameResultElement.textContent = "";
    userInput.value = "";
}