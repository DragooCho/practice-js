// const btn = document.querySelector(".Btn-click");

// btn.addEventListener("click", () => {
//   const wordTag = document.querySelector(".wordStart");
//   const word = wordTag.textContent;
//   const inputTag = document.querySelector("#FirstInput");
//   const resultTag = document.querySelector("#result");
//   const input = inputTag.value;
//   const lastIndex = word.length - 1;
//   //word.length - 1 는 단어의 끝글자를 가져옴
//   const w = word[lastIndex];
//   const i = input[0];
//   if (w === i) {
//     wordTag.textContent = input;
//     resultTag.textContent = "정답";
//     inputTag.value = null;
//     inputTag.focus();
//   } else {
//     resultTag.textContent = "땡";
//     inputTag.value = null;
//     inputTag.focus();
//     // focus()는 입력창에 커서를 넣고 대기하라는것
//   }
// });

const Billboard = document.querySelector(".wordTitle");
const inputWindow = document.querySelector("#FirstInput");
const Btn = document.querySelector(".Btn-click");
const resultLine = document.querySelector("#result");

function randomNumberBox() {
  let number1 = Math.floor(Math.random() * 10);
  let number2 = Math.floor(Math.random() * 10);
  let number3 = Math.floor(Math.random() * 10);
  let number4 = Math.floor(Math.random() * 10);
  if (number1 === number2) {
    return randomNumberBox();
  } else if (number2 === number3) {
    return randomNumberBox();
  } else if (number3 === number4) {
    return randomNumberBox();
  } else if (number4 === number1) {
    return randomNumberBox();
  } else if (number3 === number1) {
    return randomNumberBox();
  } else if (number2 === number4) {
    return randomNumberBox();
  } else {
    answerNumber = [number1, number2, number3, number4];
  }
}

randomNumberBox();

// console.log(answerNumber[1]);

// btn.addEventListener("click", () => {});
