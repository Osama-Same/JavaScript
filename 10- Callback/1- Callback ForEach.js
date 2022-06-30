//Write a function loop that accepts two arguments an array and a callback function, the function loop should enable us to access all the values in the array and gives us the ability to modify the elements by using the callback function (Just like forEach).
// DO NOT USE ANY ARRAY METHODS (forEach, reduce, map, filter)
const loop = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};
loop([1, 2, 3], function (number) {
  console.log(number);
});
// 1
// 2
// 3
