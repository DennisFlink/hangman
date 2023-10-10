function print(letter) {
  console.log(letter);
}
const words = ["hangman", "javascript", "programming", "developer", "computer"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

charWord = selectedWord.split("");

for (let i = 0; i < charWord.length; i++) {
  const box = document.createElement("div");
  box.className = "letter-box";
  box.id = i + 1;
  document.querySelector(".word-box").append(box);
}
let box = document.querySelector(".word-box");
function print(letter) {
  for (let i = 0; i < charWord.length; i++) {
    if (charWord[i] === letter) {
    }
  }
}
