//Write a function that accepts two arguments string and callback and using the callback return an array of all characters.

const exampleFunction1 = function (string1, string2, callback) {
  return callback(string1, string2);
};
exampleFunction("osama", "sssa", function (string1, string2) {
  return string1 + string2;
});
