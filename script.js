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
      console.log("true");
    }
  });
  if (guess == 0) {
    console.log("wrong");
  }
}
