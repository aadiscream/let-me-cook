let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const randomCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  return option[Math.floor(Math.random() * 3)];
};

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawGame = () => {
  msg.innerText = "Draw";
  msg.style.backgroundColor = "black";
};

const ShowWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! as ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! as ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    compChoice = randomCompChoice();
    console.log(userChoice, compChoice);
    if (userChoice === compChoice) {
      drawGame();
      msg.innerText = "Draw";
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        userWin = compChoice === "scissor" ? false : true;
      } else {
        userWin = compChoice === "rock" ? false : true;
      }
      ShowWinner(userWin, userChoice, compChoice);
    }
  });
});
