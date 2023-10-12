'use strict';

const guessDisplay = document.querySelector('.guess-text p');
const modal = document.querySelector('.modal-box');
const modalHeader = document.querySelector('.modal-box-header');
const newGameBtn = document.querySelector('.new-game');
const message = document.querySelector('.message');
const overlay = document.querySelector('.overlay');
const svgId = document.querySelectorAll('svg [id]');

/* DECLARING GLOBAL VARIABLES */
const maxGuesses = 6;
let wrongGuessCounter = 0;
let rightGuesses = 0;
let selectedWord;
let charWord = [];
let keysPressed = [];
let playing = true;
/////////////////////////

/* KEYBOARD JAVASCRIPT */
// prettier-ignore
const keyboardLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Å', 'Ö'];
const keyboardBox = document.querySelector('.keyboard-box');
keyboardLetters.forEach(letters => {
  const button = document.createElement('button'); // create buttons
  button.setAttribute('id', letters.toLowerCase()); // id to buttons
  button.textContent = letters; // Adding textcontent to button elements
  button.setAttribute('class', 'letter'); // "letter" class for styling in css
  button.addEventListener('click', () => {
    print(letters);
  });
  keyboardBox.appendChild(button); // child of keyboardBox
});
const letterButtons = document.querySelectorAll('.letter');

// Event Delegation for keydown //
document.addEventListener('keydown', event => {
  const key = event.key.toUpperCase();
  if (keyboardLetters.includes(key) && !keysPressed.includes(key)) {
    keysPressed.push(key);
    print(key);
  }
});

// NEW GAME FUNCTION //
function newGame() {
  playing = true;
  wrongGuessCounter = 0;
  rightGuesses = 0;
  selectedWord = generateWord();
  charWord = selectedWord.split('');
  message.textContent = '';

  // Clear word boxes //
  const wordBox = document.querySelector('.word-box');
  while (wordBox.firstChild) {
    wordBox.removeChild(wordBox.firstChild);
  }

  // Clear keybords input
  keysPressed = [];

  for (let i = 0; i < charWord.length; i++) {
    const box = document.createElement('div');
    box.className = 'letter-box';
    box.id = i + 1;
    document.querySelector('.word-box').append(box);
  }
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  letterButtons.forEach(button => {
    button.classList.remove('wrong');
    button.classList.remove('right');
  });
  guessDisplay.textContent = '0 / 6';
  svgId.forEach(id => {
    id.style.display = 'none';
  });
}
newGame();

// GAMEOVER FUNCTION CALLING MODAL //
function gameOver(isItOver) {
  playing = false;
  console.log(isItOver);
  letterButtons.forEach(button => {
    button.classList.add('wrong');
  });
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  if (isItOver) {
    modalHeader.textContent = 'You Win 🎉';
  } else {
    modalHeader.textContent = 'You Lose 😥';
    message.textContent = `The correct word is: ${charWord
      .join('')
      .toUpperCase()}`;
  }
}
// Generating a new Word //
function generateWord() {
  const words = [
    'hangman',
    'javascript',
    'programming',
    'developer',
    'computer',
  ];
  selectedWord = words[Math.floor(Math.random() * words.length)];
  return selectedWord;
}

function print(letter) {
  if (playing) {
    let guess = 0;
    const rightButton = document.getElementById(letter.toLowerCase());
    charWord.forEach((char, i) => {
      if (char === letter.toLowerCase()) {
        document.getElementById(i + 1).textContent = char.toUpperCase();
        guess = 1;
        rightButton.classList.add('right');
        rightGuesses++;
      }
    });
    if (guess == 0) {
      const wrongButton = document.getElementById(letter.toLowerCase());
      wrongButton.classList.add('wrong');
      wrongGuessCounter++;
      addBodyParts();
    }
    keysPressed.push(letter);
    guessDisplay.textContent = `${wrongGuessCounter} / ${maxGuesses}`;
    if (wrongGuessCounter === maxGuesses) {
      gameOver(0);
    }
    if (rightGuesses === selectedWord.length) {
      gameOver(1);
    }
  }
}

newGameBtn.addEventListener('click', newGame);

/* DISPLAYING HANGMAN */
function addBodyParts() {
  if (wrongGuessCounter <= maxGuesses) {
    let addPart;
    switch (wrongGuessCounter) {
      case 1:
        addPart = document.querySelector('svg > #ground');
        addPart.style.display = 'block';
        break;
      case 2:
        addPart = document.querySelector('svg > #scaffold');
        addPart.style.display = 'block';
        break;
      case 3:
        addPart = document.querySelector('svg > #head');
        addPart.style.display = 'block';
        break;
      case 4:
        addPart = document.querySelector('svg > #body');
        addPart.style.display = 'block';
        break;
      case 5:
        addPart = document.querySelector('svg > #arms');
        addPart.style.display = 'block';
        break;
      case 6:
        addPart = document.querySelector('svg > #legs');
        addPart.style.display = 'block';
        break;
      default:
    }
  }
}
