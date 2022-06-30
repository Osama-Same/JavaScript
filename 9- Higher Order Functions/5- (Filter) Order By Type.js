//Write a function orderByType that accepts an array of mixed type values and returns a new array with the same values but ordered by type, meaning all the strings first then all numbers then all booleans.

// Make sure to use the correct higher order function
const orderByType = function (array) {
  const string = array.filter(function (st) {
    return typeof st === "string";
  });
  const number = array.filter(function (num) {
    return typeof num === "number";
  });
  const boolean = array.filter(function (bool) {
    return typeof bool === "boolean";
  });
  return string.concat(number).concat(boolean);
};
orderByType([1, true, 10, "hello", "world", false, 90, "cat"]); // => [hello, world, cat, 1, 10, 90, true, false]
