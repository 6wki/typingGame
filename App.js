const start = document.querySelector(".start button"),
  starttext = document.querySelector(".start p"),
  nav = document.querySelector("nav"),
  startButton = document.querySelector(".start"),
  wordsContainer = document.querySelector(".words"),
  question = document.querySelector("h1"),
  input = document.querySelector("input"),
  score = document.querySelector(".score"),
  time = document.querySelector(".time"),
  body = document.querySelector("body");
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
  start.removeEventListener("click", startGame);
  startButton.style.backgroundColor = "none";
  setInterval(function () {
    nav.style.width = "100%";
    nav.style.top = "0";
    nav.style.backgroundColor = "#fc2947";
    nav.style.borderRadius = "0";
    nav.style.fontSize = "2rem";
    // startButton.remove();
    loading.remove();
    start.style.width = "0";
    start.style.height = "0";
  }, 2000);
  setInterval(function () {
    startButton.style.top = "-100vh";
  }, 3000);
  const ply = setInterval(function () {
    playing();
  }, 4000);
  generateWords();
  input.focus();
}

function generateWords() {
  const random = wordsList[Math.floor(Math.random() * wordsList.length)];
  question.innerHTML = random;
  const rem = wordsList.indexOf(random);
  wordsList.splice(rem, 1);
  wordsContainer.innerHTML = "";
  for (let i = 0; i < wordsList.length; i++) {
    const div = document.createElement("div");
    const txt = document.createTextNode(wordsList[i]);
    div.appendChild(txt);
    div.className = "word";
    wordsContainer.appendChild(div);
  }
}

function playing() {
  let start = setInterval(() => {
    if (time.innerHTML !== "0") {
      time.innerHTML--;
    } else {
      clearInterval(start);
      if (question.innerHTML === input.value.toLowerCase()) {
        generateWords();
        time.innerHTML = defaultTime;
        input.value = "";
        score.innerHTML++;
      } else {
        input.disabled = true;
        const scoreEnd = document.querySelector(".scroreEnd");
        scoreEnd.innerHTML = score.innerHTML;
        aler = document.querySelector(".failed");
        aler.style.display = "flex";
      }
      if (question.innerHTML === "undefined") {
        aler2 = document.querySelector(".madeit");
        aler2.style.display = "flex";
        question.style.display = "none";
      }
    }
  }, 1000);
}

// function alert(message, classn) {
//   const thealt = body.appendChild(document.createElement("div"));
//   thealt.className = `alert ${classn}`;
//   thealt.innerHTML = `
//   <p>${message}</p>
//   <button onClick="window.location.reload()>Try Again</button>
//   `;
//   body.appendChild(thealt);
// }
