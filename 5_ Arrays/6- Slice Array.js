//  Write a function `sliceArray` that accepts three arguments an ordered numeric `array`, `startVal`, `endVal`
// and returns an array starting at the `startVal` and ending at `endVal`
const sliceArray = function (array, startVal, endVal) {
  const startIndex = array.indexOf(startVal);
  let endIndex = array.indexOf(endVal);
  // if startIndex is equal to endIndex then endIndex stays the same otherwise
  // endIndex gets incremented by 1 (third case)
  endIndex = startIndex === endIndex ? endIndex : endIndex + 1;
  return array.slice(startIndex, endIndex);
};
console.log(sliceArray([10, 20, 30, 40, 50, 60], 10, 60)); // => [10, 20, 30, 40, 50, 60]
console.log(sliceArray([10, 20, 30, 40, 50, 60], 20, 40)); // => [20, 30, 40]
console.log(sliceArray([10, 20, 30, 40, 50, 60], 20, 20)); // => []
console.log(sliceArray([10, 20, 30, 40, 50, 60], 50, 20)); // => []
