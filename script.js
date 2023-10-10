const maxTries = 6;
let tries = 1;

function addBodyParts() {
  if (tries <= maxTries) {
    let addPart;
    switch (tries) {
      case 1:
        addPart = document.querySelector("svg > #ground");
        addPart.style.display = "block";
        console.log(tries);
        break;
      case 2:
        addPart = document.querySelector("svg > #scaffold");
        addPart.style.display = "block";
        console.log(tries);
        break;
      case 3:
        addPart = document.querySelector("svg > #head");
        addPart.style.display = "block";
        break;
      case 4:
        addPart = document.querySelector("svg > #body");
        addPart.style.display = "block";
        break;
      case 5:
        addPart = document.querySelector("svg > #arms");
        addPart.style.display = "block";
        break;
      case 6:
        addPart = document.querySelector("svg > #legs");
        addPart.style.display = "block";
        break;
      default:
        console.log("fail");
    }
  }
  tries += 1;
}

function print(letter) {
  console.log(letter);
}
const words = ["hangman", "javascript", "programming", "developer", "computer"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

charWord = selectedWord.split("");
console.log(charWord);

for (let i = 0; i < charWord.length; i++) {
  const box = document.createElement("div");
  box.className = "letter-box";
  box.id = i + 1;
  document.querySelector(".word-box").append(box);
}

function print(letter) {
  let guess = 0;
  charWord.forEach((char, i) => {
    if (char === letter.toLowerCase()) {
      document.getElementById(i + 1).textContent = char;
      guess = 1;
    }
  });
  if (guess == 0) {
    addBodyParts();
  }
}
