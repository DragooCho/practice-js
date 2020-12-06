const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const division = document.querySelector("#division");
const resetBtn = document.querySelector(".resetButton");
const resultBtn = document.querySelector(".resultBtn-click");
const numberInput = document.querySelector("#calculatorInput");
const targetBtn = document.querySelector(".tenNumberBox");

let countNumber;
let operator;
let deleteEndCreate = true;

targetBtn.addEventListener("click", (e) => {
  if (deleteEndCreate === true) {
    numberInput.value = null;
    numberInput.value = numberInput.value + e.target.value;
    deleteEndCreate = false;
  } else {
    numberInput.value = numberInput.value + e.target.value;
  }
});

function pickupOperator() {
  if (operator) {
    if (operator === "+") {
      countNumber = countNumber + Number(numberInput.value);
    } else if (operator === "-") {
      countNumber = countNumber - Number(numberInput.value);
    } else if (operator === "*") {
      countNumber = countNumber * Number(numberInput.value);
    } else if (operator === "/") {
      countNumber = countNumber / Number(numberInput.value);
    }
    numberInput.value = countNumber;
  } else {
    countNumber = Number(numberInput.value);
  }
}

plus.addEventListener("click", () => {
  if (numberInput.value) {
    pickupOperator();
    operator = "+";
    deleteEndCreate = true;
  }
});

minus.addEventListener("click", () => {
  if (numberInput.value) {
    pickupOperator();
    operator = "-";
    deleteEndCreate = true;
  }
});

multiply.addEventListener("click", () => {
  if (numberInput.value) {
    pickupOperator();
    operator = "*";
    deleteEndCreate = true;
  }
});

division.addEventListener("click", () => {
  if (numberInput.value) {
    pickupOperator();
    operator = "/";
    deleteEndCreate = true;
  }
});

resetBtn.addEventListener("click", () => {
  numberInput.value = "";
  countNumber = null;
  operator = null;
  deleteEndCreate = true;
});

function resultCalculator() {
  if (operator) {
    if (numberInput.value) {
      if (operator === "+") {
        countNumber = countNumber + Number(numberInput.value);
      } else if (operator === "-") {
        countNumber = countNumber - Number(numberInput.value);
      } else if (operator === "*") {
        countNumber = countNumber * Number(numberInput.value);
      } else if (operator === "/") {
        countNumber = countNumber / Number(numberInput.value);
      }
      numberInput.value = countNumber;
    }
  } else {
    if (numberInput.value) {
      numberInput.value = countNumber;
    }
  }
  deleteEndCreate = true;
  operator = null;
  countNumber = null;
}

resultBtn.addEventListener("click", () => {
  resultCalculator();
});
