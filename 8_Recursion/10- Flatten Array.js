//Write a function flattenArray that accepts a nested array and returns a one dimensional array.

const flattenArray = function (array) {
  if (array.length === 1 && !Array.isArray(array[0])) {
    return [array[0]];
  }
  if (Array.isArray(array[0])) {
    return flattenArray(array[0]);
  }
  return [array[0]].concat(flattenArray(array.slice(1)));
};

flattenArray([1, 2, 3, [4, 5, [6, 7]]]); // => [1, 2, 3, 4, 5, 6, 7]
flattenArray([[1, 2, [3, 4]]]); // => [1, 2, 3, 4]
