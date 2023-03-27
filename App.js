const start = document.querySelector(".start button"),
  starttext = document.querySelector(".start p"),
  nav = document.querySelector("nav"),
  startButton = document.querySelector(".start"),
  wordsContainer = document.querySelector(".words"),
  question = document.querySelector("h1"),
  input = document.querySelector("input"),
  score = document.querySelector(".score"),
  time = document.querySelector(".time");
start.addEventListener("click", startGame);

const wordsList = [
  "cup",
  "speech",
  "parking",
  "award",
  "crosswalk",
  "tire",
  "distributor",
  "ignite",
  "depart",
  "hen",
  "sample",
  "screw",
  "charm",
  "retain",
  "urgency",
  "species",
  "horn",
  "behave",
  "quarrel",
  "concentrate",
  "applaud",
  "raise",
  "rape",
  "epicalyx",
  "patch",
  "sign",
  "crevice",
  "core",
  "withdraw",
  "pride",
];

const defaultTime = 3;
const defaultScore = 0;

function startGame() {
  starttext.remove();
  start.disable = true;
  start.style.backgroundColor = "#e9e9e9";
  const loading = document.createElement("img");
  loading.src = "./Assets/Dual Ring-1s-200px.gif";
  start.appendChild(loading);
  start.style.width = "1000rem";
  start.style.height = "1000rem";
  start.style.boxShadow = "none";
  start.style.borderRadius = "50%";
  nav.style.zIndex = "-1";
  start.style.cursor = "default";
  score.innerHTML = `[${defaultScore}]`;
  start.removeEventListener("click", startGame);
  setInterval(function () {
    nav.style.width = "100%";
    nav.style.top = "0";
    nav.style.backgroundColor = "#fc2947";
    nav.style.borderRadius = "0";
    nav.style.fontSize = "2rem";
    startButton.remove();
    loading.remove();
  }, 0);
  setInterval(function () {
    start.style.opacity = "0";
    start.style.visibility = "hidden";
  }, 0);
  generateWords();
  input.focus();
}

function generateWords() {
  const random = wordsList[Math.floor(Math.random() * wordsList.length)];
  question.innerHTML = random;
  const rem = wordsList.indexOf(random);
  wordsList.splice(rem, 1);
  wordsList.innerHTML = "";
  for (let i = 1; i < wordsList.length; i++) {
    const div = document.createElement("div");
    const txt = document.createTextNode(wordsList[i]);
    div.appendChild(txt);
    div.className = "word";
    wordsContainer.appendChild(div);
  }
}
