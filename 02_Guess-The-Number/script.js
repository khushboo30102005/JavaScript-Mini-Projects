const guessInput = document.querySelector("#input");
const submitBtn = document.querySelector(".Submit");
const newGameBtn = document.querySelector(".new-game");
const mainContainer = document.querySelector("main");
const remainingGuesses = document.querySelector(".remaining-guesses span");
const popup = document.querySelector(".popup");
const answerContainer = document.createElement("div");
const answerStatus = document.createElement("h3");
const guessCount = document.createElement("p");

mainContainer.append(answerContainer);
answerContainer.append(answerStatus, guessCount);
const randomNumber = Math.round(Math.random() * 100);

let userGuess;
let guessChance = 10;
const allGuesses = [];
remainingGuesses.innerText = guessChance;

guessInput.addEventListener("change", () => {
  userGuess = guessInput.value;
});

submitBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!userGuess) {
    popup.classList.add("show-popup");
  }
  if (userGuess) {
    guessChance--;
    remainingGuesses.innerText = guessChance;
    if (+userGuess === randomNumber) {
      answerStatus.innerText = `You got it in ${
        10 - guessChance
      } guesses! The number was ${userGuess}.`;
      submitBtn.classList.remove("blue");
      newGameBtn.classList.add("blue");
      submitBtn.disabled = true;
    } else if (userGuess < randomNumber) {
      answerStatus.innerText = `${userGuess} is too low!`;
    } else if (userGuess > randomNumber) {
      answerStatus.innerText = `${userGuess} is too high!`;
    }
    if (guessChance === 0) {
      submitBtn.classList.remove("blue");
      newGameBtn.classList.add("blue");
      submitBtn.disabled = true;
      answerStatus.innerText = `Game over! The number was ${randomNumber}.`;
    }

    allGuesses.push(userGuess);
    guessCount.innerText = `Your guesses: ${allGuesses.join(', ')}`;

    guessInput.value = "";
    userGuess = guessInput.value;
  }
});

document.body.addEventListener("click", (e) => {
  popup.classList.remove("show-popup");
});

newGameBtn.addEventListener("click", () => {
  guessInput.value = "";
  userGuess = guessInput.value;
  guessCount.innerText = "";
  answerStatus.innerText = "";
  submitBtn.disabled = false;
  newGameBtn.disabled = true;
  submitBtn.classList.add("blue");
  newGameBtn.classList.remove("blue");
});
