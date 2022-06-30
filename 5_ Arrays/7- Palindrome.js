//Write a function isPalindrome that accepts a string argument and returns whether the string is a palindrome or not.

// a palindrome is when a string is read the same backwards
const isPalindrome = function (string) {
  string = string.split(" ").join("");
  return string === string.split("").reverse().join("");
};

console.log(isPalindrome("dad")); // => true
console.log(isPalindrome("was it a car or a cat i saw")); // => true
console.log(isPalindrome("a santa at nasa")); // => true
console.log(isPalindrome("John doe")); // => false
