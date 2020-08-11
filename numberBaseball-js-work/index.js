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

function MakeRandomNumber() {
  const Anumber1 = Math.floor(Math.random() * 10),
    Anumber2 = Math.floor(Math.random() * 10),
    Anumber3 = Math.floor(Math.random() * 10),
    Anumber4 = Math.floor(Math.random() * 10);
  if (
    Anumber1 === Anumber2 ||
    Anumber2 === Anumber3 ||
    Anumber3 === Anumber4 ||
    Anumber4 === Anumber1 ||
    Anumber3 === Anumber1 ||
    Anumber2 === Anumber4
  ) {
    return MakeRandomNumber();
  } else {
    answerNumber = [Anumber1, Anumber2, Anumber3, Anumber4];
  }
}

MakeRandomNumber();
// btn.addEventListener("click", () => {
//   TEMP = Number(inputWindow.value);
//   console.log(TEMP);
// });

const inputNumber = answerNumber;
const ANSWERNumber1 = inputNumber.toString()[0];
const ANSWERNumber2 = inputNumber.toString()[2];
const ANSWERNumber3 = inputNumber.toString()[4];
const ANSWERNumber4 = inputNumber.toString()[6];
