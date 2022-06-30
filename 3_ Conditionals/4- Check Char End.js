//Write a function endsWith that accept two string arguments string, character and returns true if the string ends with that character.
const endsWith = function (string, character) {
  if (string[string.length - 1].toLowerCase() === character.toLowerCase()) {
    return true;
  }
  return false;
};
endsWith("Hello", "o"); // => true
endsWith("Hello", "O"); // => true
endsWith("hellO", "o"); // => true
endsWith("World", "h"); // => false
endsWith("World", "a"); // => false
endsWith("World", "c"); // => false
