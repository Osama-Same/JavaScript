//Write a function addToLast that accepts two arguments an array, value and returns an array with the value added to the end of the array while using unshift instead of push
// do not use `push` or array assignments, only `unshift`

const addToLast = function (array, value) {
  array.reverse();
  array.unshift(value);
  return array.reverse();
};
console.log(addToLast([1, 2, 3], 4)); // => [1, 2, 3, 4]
console.log(addToLast([10, 6], 1)); // => [10, 6, 1]
