// write a function `reverseWords` that accepts a string argument and returns the same string if only
// one word was passed in, and if more than one is passed it will return a string of the words in a reverse order

const reverseWords = function (string) {
  return string.split(" ").reverse();
};
console.log(reverseWords("Hello"));
console.log(reverseWords("Hello World"));
