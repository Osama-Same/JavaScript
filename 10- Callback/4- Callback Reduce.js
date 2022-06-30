//By using the function loop, write a function reduce that iterates over items and returns an accumulated value depending on what is returned in the callback function (Just like reduce).

// DO NOT USE ANY ARRAY METHODS (forEach, reduce, map, filter)
const reduce = function (array, callback) {
  let accumulator = array.shift();
  loop(array, function (element) {
    accumulator = callback(accumulator, element);
  });
  return accumulator;
};

reduce([1, 2, 3], function (accumulator, number) {
  return accumulator + number;
}); // 1 + 2 + 3 => 6
