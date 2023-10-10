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
  for (let i = 0; i < charWord.length; i++) {
    if (charWord[i] === letter) {
      document.querySelector(`.word-box > div:nth-child(${i + 1})`).innerHTML =
        letter;
    }
  }
}
