//Write a function convertToString that accepts an array of strings and returns a string made out of the array values.

const convertToString = function (array) {
  return array.join(" ");
};

convertToString(["Hello", "i", "am", "John", "Doe"]); // => Hello i am John Doe
convertToString(["Hello", "John", "i", "am", "Jane"]); // => Hello John i am Jane
