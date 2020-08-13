const input = document.querySelector("#input");
const check = document.querySelector("#check");
const log = document.querySelector("#log");

let numbers = [];
let a = -1;
while (a <= 8) {
  const randomNumber = a + 1;
  numbers.push(randomNumber);
  a += 1;
}

let answer = [];
let n = 0;
while (n <= 3) {
  const index = Math.floor(Math.random() * (10 - n));
  answer.push(numbers[index]);
  numbers.splice(index, 1);
  n += 1;
}

console.log(answer);

let count = 0;
check.addEventListener("click", () => {
  const value = input.value;
  if (value && value.length === 4) {
    if (answer === value) {
    }
  }
});
