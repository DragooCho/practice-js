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
