//Write a function that accepts two arguments number and callback and using the callback return the number squared.
const exampleFunction = function (x, y, callback) {
  return callback(x, y);
};
exampleFunction(10, 20, function (x, y) {
  return x * y;
});
