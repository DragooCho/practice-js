const startButton = document.querySelector(".startButton");
const ClearButton = document.querySelector(".clearButton");

function handerButton() {
  const restartMessage = document.querySelector("#restartMessage");
  restartMessage.textContent = null;
  const candidate = Array(45)
    .fill()
    .map((Airball, i) => i + 1);
  //매서드 체이닝

  const x = document.querySelector("#inputExcluded").value;
  Arr = x.split(",");
  for (i = 0; i < Arr.length; i++) Arr[i] = Arr[i] - 0;
  for (i = 0; i < Arr.length; i++) {
    for (j = 0; j < candidate.length; j++) {
      if (candidate[j] == Arr[i]) candidate.splice(j, 1);
    }
  }

  const shuffle = [];
  while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
  }

  //
  const inc = document.querySelector("#inputIncluded").value;
  incArr = inc.split(",");

  console.log(incArr.length);

  if (6 < incArr.length) {
    incArr = null;
  } else {
    for (z = 0; z < incArr.length; z++) {
      if (shuffle.splice(z, 1, incArr[z]));
    }
  }

  const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);
  // sort()는 단순 숫자 순서가 아닌 사전순(07이 아닌 7을 나중으로 볼수가 있다).
  const bonus = shuffle[6];
  console.log(winBalls);
  console.log(bonus);

  //
  function colorize(number, tag) {
    if (number <= 10) {
      tag.style.backgroundColor = "red";
      tag.style.color = "white";
    } else if (number <= 20) {
      tag.style.backgroundColor = "orange";
    } else if (number <= 30) {
      tag.style.backgroundColor = "yellow";
    } else if (number <= 40) {
      tag.style.backgroundColor = "blue";
      tag.style.color = "white";
    } else {
      tag.style.backgroundColor = "green";
      tag.style.color = "white";
    }
  }
  //함수와 매개변수를 이용해서 중복 작업을 줄인다.

  const resultTag = document.querySelector("#result");

  winBalls.forEach((number, index) => {
    setTimeout(() => {
      const ball = document.createElement("div");
      ball.className = "ball";
      //
      colorize(number, ball);
      //만든 함수를 적용1.
      ball.textContent = number;
      resultTag.appendChild(ball);
    }, 1000 * (index + 1));
  });

  const bonusTag = document.querySelector(".bonus");
  setTimeout(() => {
    const bonusBall = document.createElement("div");
    bonusBall.className = "ball";
    //
    colorize(bonus, bonusBall);
    //만든 함수를 적용2.
    bonusBall.textContent = bonus;
    bonusTag.appendChild(bonusBall);
  }, 7000);

  const MessageTag = document.querySelector("#restartMessage");
  setTimeout(() => {
    const bonusMessage2 = document.createElement("div");
    const bonusMessage1 = document.createElement("i");
    // bonusMessage1.className = "fas fa-redo-alt";
    bonusMessage1.textContent = `추첨버튼을 누르세요.`;
    bonusMessage2.textContent = `다시 추첨할려면 `;
    MessageTag.appendChild(bonusMessage1);
    MessageTag.appendChild(bonusMessage2);
  }, 7500);
}

ClearButton.addEventListener("click", () => {
  const result = document.querySelector("#result");
  const BONUS = document.querySelector(".bonus");
  result.textContent = null;
  BONUS.textContent = null;
});

function init() {
  startButton.addEventListener("click", handerButton);
}

init();
