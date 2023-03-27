const start = document.querySelector(".start button"),
  starttext = document.querySelector(".start p"),
  nav = document.querySelector("nav"),
  startButton = document.querySelector(".start");
start.addEventListener("click", startGame);

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
  start.removeEventListener("click", startGame);
  setInterval(function () {
    nav.style.width = "100%";
    nav.style.margin = "0";
    nav.style.backgroundColor = "#fc2947";
    nav.style.borderRadius = "0";
    nav.style.fontSize = "2rem";
    startButton.remove();
    loading.remove();
    start.style.opacity = "0";
    start.style.visibility = "hidden";
  }, 3000);
}
