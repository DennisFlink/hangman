"use strict";

const guessDisplay = document.querySelector(".guess-text p");
const modal = document.querySelector(".modal-box");
const modalHeader = document.querySelector(".modal-box-header");
const newGameBtn = document.querySelector(".new-game");
const message = document.querySelector(".message");
const words = ["hangman", "javascript", "programming", "developer", "computer"];

/* DECLARING GLOBAL VARIABLES */
const maxGuesses = 6;
let wrongGuessCounter = 0;
let rightGuesses = 0;
let selectedWord;
let charWord = [];
/////////////////////////

/* KEYBOARD JAVASCRIPT */
// prettier-ignore
const keyboardLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Å', 'Ö'];
const keyboardBox = document.querySelector(".keyboard-box");

keyboardLetters.forEach((letters) => {
  const button = document.createElement("button"); // create buttons
  button.setAttribute("id", letters.toLowerCase()); // id to buttons
  button.textContent = letters; // Adding textcontent to button elements
  button.setAttribute("class", "letter"); // "letter" class for styling in css
  button.addEventListener("click", () => {
    print(letters);
  });
  keyboardBox.appendChild(button); // child of keyboardBox
});
const letterButtons = document.querySelectorAll(".letter");

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  if (keyboardLetters.includes(key)) {
    print(key);
  }
});
// NEW GAME FUNCTION //
function newGame() {
  wrongGuessCounter = 0;
  rightGuesses = 0;
  selectedWord = generateWord();
  charWord = selectedWord.split("");

  // Clear word boxes //
  const wordBox = document.querySelector(".word-box");
  while (wordBox.firstChild) {
    wordBox.removeChild(wordBox.firstChild);
  }
  for (let i = 0; i < charWord.length; i++) {
    const box = document.createElement("div");
    box.className = "letter-box";
    box.id = i + 1;
    document.querySelector(".word-box").append(box);
  }
  modal.classList.add("hidden");
  letterButtons.forEach((button) => {
    button.classList.remove("wrong");
    button.classList.remove("right");
  });
}
newGame();
// GAMEOVER FUNCTION CALLING MODAL //
function gameOver(isItOver) {
  let ng = isItOver;
  letterButtons.forEach((button) => {
    button.classList.add("wrong");
  });

  if (ng) {
    modal.classList.remove("hidden");
    modalHeader.textContent = "You Win 🎉";
  } else {
    modal.classList.remove("hidden");
    modalHeader.textContent = "You Lose 😥";
    message.textContent = `The correct word is: ${charWord.join("")}`;
  }
}
// Generating a new Word //
function generateWord() {
  const words = [
    "hangman",
    "javascript",
    "programming",
    "developer",
    "computer",
  ];
  selectedWord = words[Math.floor(Math.random() * words.length)];
  console.log(selectedWord);
  return selectedWord;
}

function print(letter) {
  let guess = 0;
  const rightButton = document.getElementById(letter.toLowerCase());
  charWord.forEach((char, i) => {
    if (char === letter.toLowerCase()) {
      document.getElementById(i + 1).textContent = char;
      guess = 1;
      rightButton.classList.add("right");
      rightGuesses++;
      console.log(rightGuesses);
      console.log(selectedWord.length);
    }
  });
  if (guess == 0) {
    const wrongButton = document.getElementById(letter.toLowerCase());
    wrongButton.classList.add("wrong");
    wrongGuessCounter++;
    console.log(wrongGuessCounter);
  }
  guessDisplay.innerHTML = `${wrongGuessCounter} / ${maxGuesses}`;

  if (wrongGuessCounter === maxGuesses) {
    gameOver(0);
  }
  if (rightGuesses === selectedWord.length) {
    gameOver(1);
  }
}

newGameBtn.addEventListener("click", newGame);
