const gameBox = document.querySelector("#game-box");
const gameCharacter = document.querySelector("#game-character");
const gameBlock = document.querySelector("#game-block");
const gameScoreEl = document.querySelector("#score");
// ------------------------------------------------------------------
const characterJump = function () {
  if (!gameCharacter.classList != "game-animation") {
    gameCharacter.classList.add("game-animation");
  }
  setTimeout(function () {
    gameCharacter.classList.remove("game-animation");
  }, 500);
};
// ------------------------------------------------------------------
const createGameBlock = function () {};
// ------------------------------------------------------------------
let score = 0;
const checkDead = setInterval(function () {
  // ------------------------------------------------------------------
  let characterTop = parseInt(
    window.getComputedStyle(gameCharacter).getPropertyValue("top")
  );
  // ------------------------------------------------------------------
  let blockLeft = parseInt(
    window.getComputedStyle(gameBlock).getPropertyValue("left")
  );
  const gameScore = Math.floor(score / 100);
  // ------------------------------------------------------------------
  if (blockLeft < 80 && blockLeft > -20 && characterTop >= 516) {
    gameBlock.classList.add("game-block-level-one");
    gameBlock.classList.remove("game-block-level-two");
    gameBlock.classList.remove("game-block-level-three");
    alert("Game Over. Score: " + gameScore);
    score = 0;
    // ------------------------------------------------------------------
  } else {
    score++;
    gameScoreEl.textContent = gameScore;
    // ------------------------------------------------------------------
    if (gameScoreEl.textContent < 20) {
      gameBlock.classList.add("game-block-level-one");
      gameBlock.classList.remove("game-block-level-two");
      gameBlock.classList.remove("game-block-level-three");
      gameBlock.classList.remove("game-block-level-four");
      // ------------------------------------------------------------------
    }
    if (gameScoreEl.textContent > 20) {
      gameBlock.classList.remove("game-block-level-one");
      gameBlock.classList.add("game-block-level-two");
      // ------------------------------------------------------------------
    }
    if (gameScoreEl.textContent > 40) {
      gameBlock.classList.remove("game-block-level-two");
      gameBlock.classList.add("game-block-level-three");
    }
    if (gameScoreEl.textContent > 60) {
      gameBlock.classList.remove("game-block-level-three");
      gameBlock.classList.add("game-block-level-four");
    }
    if (gameScoreEl.textContent > 100) {
      gameBlock.classList.remove("game-block-level-three");
      gameBlock.classList.add("game-block-level-five");
    }
    // ------------------------------------------------------------------
  }
  // ------------------------------------------------------------------
}, 1);
// ------------------------------------------------------------------
window.addEventListener("keydown", function (e) {
  if (e.keyCode === 32) {
    characterJump();
  }
});
