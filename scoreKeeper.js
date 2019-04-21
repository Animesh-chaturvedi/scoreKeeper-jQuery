var player1 = document.querySelector("#p1");
var player2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.getElementById("tot");
var p1score = 0;
var p2score = 0;
var gameOver = false;
winningScore = 5;
player1.addEventListener("click", function() {
  if (!gameOver) {
    p1score++;
    if (p1score === winningScore) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
    p1Display.textContent = p1score;
  }
});
player2.addEventListener("click", function() {
  if (!gameOver) {
    p2score++;
    if (p2score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2score;
  }
});
resetButton.addEventListener("click", reset);

function reset() {
  p1score = 0;
  p2score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  gameOver = false;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}
numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});
