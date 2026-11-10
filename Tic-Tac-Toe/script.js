let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let turnO = true;
let winnerMessage = document.querySelector("#msg-container");
let wintxt = document.querySelector("#msg");
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style = " color : green";

      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disableBoxex = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxex = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    winnerMessage.style.display = "none";
  }
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    if (
      boxes[pattern[0]].innerText === "O" &&
      boxes[pattern[1]].innerText === "O" &&
      boxes[pattern[2]].innerText === "O"
    ) {
      winnerMessage.style.display = "block";
      disableBoxex();
      wintxt.innerText = "O Wins🎉 ";
    } else if (
      boxes[pattern[0]].innerText === "X" &&
      boxes[pattern[1]].innerText === "X" &&
      boxes[pattern[2]].innerText === "X"
    ) {
      winnerMessage.style.display = "block";
      disableBoxex();
      wintxt.innerText = "X Wins🎉 ";
    }
  }
};
const resetGame = () => {
  turnO = true;
  enableBoxex();
};
reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
