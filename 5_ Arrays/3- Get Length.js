// write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`
const getLength = function (array) {
  // return array.push() - 1;
  return array.push();
};
console.log(getLength([1, 2, 3, 4])); // => 4
