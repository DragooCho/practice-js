const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const division = document.querySelector("#division");
const resetBtn = document.querySelector(".resetButton");
const resultBtn = document.querySelector(".resultBtn-click");
const numberInput = document.querySelector("#calculatorInput");

let countNumber;
let operator;
let deleteEndCreate = true;

const inputNum = (n) => {
  if (deleteEndCreate === true) {
    numberInput.value = null;
    numberInput.value += n;
    deleteEndCreate = false;
  } else {
    numberInput.value += n;
  }
};

function pickupOperator() {
  if (operator) {
    if (operator === "+") {
      countNumber += Number(numberInput.value);
    } else if (operator === "-") {
      countNumber -= Number(numberInput.value);
    } else if (operator === "*") {
      countNumber *= Number(numberInput.value);
    } else if (operator === "/") {
      countNumber /= Number(numberInput.value);
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

resultBtn.addEventListener("click", () => {
  resultCalculator();
});

function resultCalculator() {
  if (operator) {
    if (numberInput.value) {
      if (operator === "+") {
        numberInput.value += Number(numberInput.value);
      } else if (operator === "-") {
        numberInput.value -= Number(numberInput.value);
      } else if (operator === "*") {
        numberInput.value *= Number(numberInput.value);
      } else if (operator === "/") {
        numberInput.value /= Number(numberInput.value);
      }
    }
  } else {
    if (numberInput.value) {
      numberInput.value = countNumber;
    }
  }
  operator = null;
  countNumber = null;
  deleteEndCreate = true;
}
