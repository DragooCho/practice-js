const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

let numbers = [];

// let numbers = Array(10)
//   .fill()
//   .map((v, i) => i);

// while (a <= 8) {
//   const randomNumber = a + 1;
//   numbers.push(randomNumber);
//   a += 1;
// }

for (let n = 0; n <= 9; n += 1) {
  // 시작조건,반복이 멈추는 조건, 반복될때 추가되는 조건
  numbers.push(n);
}

console.log(numbers);

let answer = [];

for (let n = 0; n <= 3; n += 1) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}

console.log(answer);

let count = 0;
check.addEventListener("click", () => {
  const value = input.value;
  if (value && value.length === 4) {
    if (answer.join("") === value) {
      logs.appendChild(document.createTextNode("HR"));
      // log.textContent = HR 은 기존 글자를 지우고 문장을 추가하는거면
      // logs.appendChild(document.createTextNode("HR"));는 기존 문장을 유지하고 새문장을 추가함
    } else {
      console.log("다르다");
      let strike = 0;
      let ball = 0;
      for (const [aIndex, aNumber] of answer.entries()) {
        for (const [iIndex, iString] of input.value.split("").entries()) {
          if (aNumber === Number(iString)) {
            if (aIndex === iIndex) {
              strike += 1;
            } else {
              ball += 1;
            }
          }
        }
      }
      const massage = document.createTextNode(
        `${input.value} : ${strike}strike ${ball}ball`
      );
      logs.appendChild(massage);
      logs.appendChild(document.createElement("br"));
      // 'br' 를 넣어 줄 바꿈을 추가하는 작업
      if (count >= 9) {
        logs.appendChild(
          document.createTextNode(`Game Over : ${answer.join("")}`)
        );
      } else {
        count += 1;
      }
    }
  }
});
