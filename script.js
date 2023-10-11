
const maxTries = 6;
let tries = 1;

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

function addBodyParts() {
    if (tries <= maxTries) {

        let addPart;
        let triesText = document.querySelector("#tries");
        switch (tries) {
            case 1:
                addPart = document.querySelector("svg > #ground");
                addPart.style.display ="block";
                triesText.innerHTML ="5";
                break;
            case 2:
                addPart = document.querySelector("svg > #scaffold");
                addPart.style.display ="block";
                triesText.innerHTML ="4";
                triesText.style.color = "#D4E03C";
                break;
            case 3:
                addPart = document.querySelector("svg > #head");
                addPart.style.display ="block";
                triesText.innerHTML ="3";
                triesText.style.color = "#D4E03C";
                break;
            case 4:
                addPart = document.querySelector("svg > #body");
                addPart.style.display ="block";
                triesText.innerHTML ="2";
                triesText.style.color = "#EEC82D";
                break;
            case 5:
                addPart = document.querySelector("svg > #arms");
                addPart.style.display ="block";
                triesText.innerHTML ="1";
                triesText.style.color = "#EEA82D";
                break;
            case 6:
                addPart = document.querySelector("svg > #legs");
                addPart.style.display ="block";
                triesText.innerHTML ="0";
                triesText.style.color = "#F74216";
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