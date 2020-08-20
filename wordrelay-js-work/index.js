const btn = document.querySelector(".Btn-click");

btn.addEventListener("click", () => {
  const wordTag = document.querySelector(".wordStart");
  const word = wordTag.textContent;
  const inputTag = document.querySelector("#FirstInput");
  const resultTag = document.querySelector("#result");
  const input = inputTag.value;
  const lastIndex = word.length - 1;
  //word.length - 1 는 단어의 끝글자를 가져옴
  const w = word[lastIndex];
  const i = input[0];
  if (w === i) {
    wordTag.textContent = input;
    resultTag.textContent = "정답";
    inputTag.value = null;
    inputTag.focus();
  } else {
    resultTag.textContent = "땡";
    inputTag.value = null;
    inputTag.focus();
    // focus()는 입력창에 커서를 넣고 대기하라는것
  }
});

// const btn = document.querySelector(".Btn-click");

// function clickWordStart() {
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
// }

// function init() {
//   btn.addEventListener("click", clickWordStart);
// }

// init();

// //기존 함수형 코드
