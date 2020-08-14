const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

let numbers = [];
let a = -1;
while (a <= 8) {
  const randomNumber = a + 1;
  numbers.push(randomNumber);
  a += 1;
}

// console.log(numbers);

let answer = [];

for (let n = 0; n <= 3; n += 1) {
  const index = Math.floor(Math.random() * (10 - n));
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
// 3046  4316
console.log(answer);

let count = 0;
check.addEventListener("click", () => {
  const value = input.value;
  if (value && value.length === 4) {
    if (answer.join("") === value) {
      logs.appendChild(document.createTextNode("HR"));
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
      logs.appendChild(
        document.createTextNode(`${input.value} : ${strike}strike ${ball}ball`)
      );
    }
  }
});
