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

const intervalMaker = () => {
  return setInterval(() => {
    if (computerChoice === "rock") {
      computerChoice = "scissors";
    } else if (computerChoice === "scissors") {
      computerChoice = "paper";
    } else if (computerChoice === "paper") {
      computerChoice = "rock";
    }
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspCoord[computerChoice]} 0`;
  }, 50);
};

let intervalId = intervalMaker();

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

//점수를 가져오고 조작하고 다시 집어넣어서 반영한다.
//보통 자바스크립트의 구현 방식이다.

const clickButton = (myChoice) => {
  return () => {
    clearInterval(intervalId);
    const myScore = score[myChoice];
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
    setTimeout(() => {
      intervalId = intervalMaker();
    }, 1000);
  };
};
// 이렇게 화살을 연달아 쓰는게 고차함수이다.

// 중복된 코드가 떨어져있으면 함수로 쓰고 중복된 코드가 붙어 있으면 반복문으로 쓰는게 좋다.
// 익숙해질려면 백준 알고리즘으로 풀어보는 훈련도 좋다.
// 제로초 블로그 알고리즘 항목도 참고해보자.
rockTag.addEventListener("click", clickButton("rock"));
scissorsTag.addEventListener("click", clickButton("scissors"));
paperTag.addEventListener("click", clickButton("paper"));
// ("click", clickButton('paper'))에서 'paper'는 함수안의 함수(이경우는 메게변수)를 표현한다.
// 그리고 그런 함수의 호출 경우는 항상 return값으로 대체 되어야한다.
