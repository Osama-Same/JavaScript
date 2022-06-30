// write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string
// starts with that character
"hello"[0]; // => h
"hello"[1]; // => e
"hello"[2]; // => l
"hello"[3]; // => l
"hello"[4]; // => o

const startsWith = function (string, character) {
  if (string[0].toLowerCase() === character.toLowerCase()) {
    return true;
  }
  return false;
};
console.log(startsWith("Hello", "h")); // => true
console.log(startsWith("Hello", "H")); // => true
console.log(startsWith("hello", "H")); // => true
console.log(startsWith("World", "h")); // => false
console.log(startsWith("World", "a")); // => false
console.log(startsWith("World", "c")); // => false

//Write a function endsWith that accept two string arguments string, character and returns true if the string ends with that character.
//اكتب دالة تنتهي بـ التي تقبل وسيطتين سلسلة ، حرف وترجع صحيحًا إذا كانت السلسلة تنتهي بهذا الحرف
const startsWith1 = function (string, character) {
  string = "hello"[4]; // => h
  string = "hello"[3]; // => e
  string = "hello"[2]; // => l
  string = "hello"[1]; // => l
  string = "hello"[0]; // => o
  if (character === string.charAt()) {
    return true;
  } else return false;
};
console.log(startsWith("Hello", "h")); // => true
console.log(startsWith("World", "h")); // => false
