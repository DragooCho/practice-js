const computerTag = document.querySelector("#computer");
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;

let computerChoice = "rock";
const rspCoord = {
  rock: "0", //바위
  scissors: "-142px", //가위
  paper: "-284px", //보
};
// Array-like object

//  예로들어 rspCoord.rock 과 rspCoord['rock']는 같은 쓰임새이다.
//  다만 rspCoord['rock']의 경우 []안을 변수로 바꾸는게 가능하다.

setInterval(() => {
  if (computerChoice === "rock") {
    computerChoice = "scissors";
  } else if (computerChoice === "scissors") {
    computerChoice = "paper";
  } else if (computerChoice === "paper") {
    computerChoice = "rock";
  }
  computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspCoord[computerChoice]} 0`;
}, 50);

const rockTag = document.querySelector("#rock");
const scissorsTag = document.querySelector("#scissors");
const paperTag = document.querySelector("#paper");

// 가위: 1, 바위: 0, 보: -1
// 나/컴퓨터 가위   바위   보
// 가위       0     1     2
// 바위      -1     0     1
// 보        -2    -1     0

const score = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

rockTag.addEventListener("click", () => {
  const myScore = score.rock;
  const computerScore = score[computerChoice];
  const diff = myScore - computerScore;
  const scoreTag = document.querySelector("#score");
  let accScore = Number(scoreTag.textContent);
  if (diff === 2 || diff === -1) {
    accScore += 1;
  } else if (diff === -2 || diff === 1) {
    accScore -= 1;
  }
  scoreTag.textContent = accScore;
});

//점수를 가져오고 조작하고 다시 집어넣어서 반영한다.
//보통 자바스크립트의 구현 방식이다.

scissorsTag.addEventListener("click", () => {
  const myScore = score.scissors;
  const computerScore = score[computerChoice];
  const diff = myScore - computerScore;
  const scoreTag = document.querySelector("#score");
  let accScore = Number(scoreTag.textContent);
  if (diff === 2 || diff === -1) {
    accScore += 1;
  } else if (diff === -2 || diff === 1) {
    accScore -= 1;
  }
  scoreTag.textContent = accScore;
});

paperTag.addEventListener("click", () => {
  const myScore = score.paper;
  const computerScore = score[computerChoice];
  const diff = myScore - computerScore;
  const scoreTag = document.querySelector("#score");
  let accScore = Number(scoreTag.textContent);
  if (diff === 2 || diff === -1) {
    accScore += 1;
  } else if (diff === -2 || diff === 1) {
    accScore -= 1;
  }
  scoreTag.textContent = accScore;
});

// rockTag.addEventListener("click", () => {
//   let score = 0;
//   if (coord === rspCoord.rock) {
//   } else if (coord === rspCoord.scissors) {
//     score += 1;
//   } else if (coord === rspCoord.paper) {
//     score -= 1;
//   }
// });
// scissorsTag.addEventListener("click", () => {
//   let score = 0;
//   if (coord === rspCoord.scissors) {
//   } else if (coord === rspCoord.paper) {
//     score += 1;
//   } else if (coord === rspCoord.rock) {
//     score -= 1;
//   }
// });
// paperTag.addEventListener("click", () => {
//   let score = 0;
//   if (coord === rspCoord.paper) {
//   } else if (coord === rspCoord.rock) {
//     score += 1;
//   } else if (coord === rspCoord.scissors) {
//     score -= 1;
//   }
// });
