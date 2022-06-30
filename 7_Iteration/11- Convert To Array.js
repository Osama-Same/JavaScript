//Write a function convertToArray that accepts an object with numerical keys and returns an array containing the values with the corresponding index.

const convertToArray = function (object) {
  const array = [];
  for (let key in object) {
    array[key] = object[key];
  }
  return array;
};

convertToArray({ 0: "one", 1: "two", 2: "three" }); // => ["one", "two", "three"]
convertToArray({ 0: "one", 1: "two", 2: "three" }); // => ["one", "two", "three"]
