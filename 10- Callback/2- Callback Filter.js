//By using the function loop, write a function filter that accepts two arguments array and callback and iterates over array and return a new array of all the items that passed the filter condition that was returned by the callback function (Just like filter).
// DO NOT USE ANY ARRAY METHODS (forEach, reduce, map, filter)
const filter = function (array, callback) {
  const newArray = [];
  loop(array, function (element) {
    if (callback(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

filter([1, 2, 3], function (number) {
  return number > 1;
}); // => [2, 3]
