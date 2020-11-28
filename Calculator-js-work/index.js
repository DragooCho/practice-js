const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const division = document.querySelector("#division");
const resetBtn = document.querySelector(".resetButton");
const resultBtn = document.querySelector(".resultBtn-click");
const calProcess = document.querySelector(".CalProcess");
const numberInput = document.querySelector("#CalculatorInput");
const CalResult = document.querySelector("#CalResult");

let TEMP;
let operator;

plus.addEventListener("click", () => {
  if (numberInput.value) {
    TEMP = Number(numberInput.value);
    operator = "+";
    numberInput.value = null;
  }
});

minus.addEventListener("click", () => {
  if (numberInput.value) {
    TEMP = Number(numberInput.value);
    operator = "-";
    numberInput.value = null;
  }
});

multiply.addEventListener("click", () => {
  if (numberInput.value) {
    TEMP = Number(numberInput.value);
    operator = "*";
    numberInput.value = null;
  }
});

division.addEventListener("click", () => {
  if (numberInput.value) {
    TEMP = Number(numberInput.value);
    operator = "/";
    numberInput.value = null;
  }
});

resetBtn.addEventListener("click", () => {
  numberInput.value = "";
  CalResult.value = null;
  TEMP = null;
  operator = null;
});

resultBtn.addEventListener("click", () => {
  if (operator) {
    if (numberInput.value) {
      if (operator === "+") {
        CalResult.value = TEMP + Number(numberInput.value);
      } else if (operator === "-") {
        CalResult.value = TEMP - Number(numberInput.value);
      } else if (operator === "*") {
        CalResult.value = TEMP * Number(numberInput.value);
      } else if (operator === "/") {
        CalResult.value = TEMP / Number(numberInput.value);
      }
    }
  } else {
    if (numberInput.value) {
      CalResult.value = TEMP;
    }
  }
  numberInput.value = CalResult.value;
});
