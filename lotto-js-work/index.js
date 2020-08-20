//
const candidate = Array(45)
  .fill()
  .map((Airball, i) => i + 1);
//매서드 체이닝

const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}

console.log(shuffle);
//
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
  const bonusBall = document.createElement("div");
  bonusBall.textContent = `다시 추첨할려면 세로고침 버튼을 누르세요.`;
  MessageTag.appendChild(bonusBall);
}, 8000);
