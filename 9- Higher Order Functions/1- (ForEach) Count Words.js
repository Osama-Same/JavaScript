//Write a function countWords that accepts a string and returns an object that has all unique words as keys and the number of times the word was found in the string as a value.
// اكتب دالة عدد الكلمات التي تقبل سلسلة وتعيد كائنًا يحتوي على جميع الكلمات الفريدة كمفاتيح وعدد مرات العثور على الكلمة في السلسلة كقيمة.

const countWords = function (string) {
  result = {};
  let char = string.split(" ");
  char.forEach(function (char) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  });
  return result;
};
countWords("hello hello world"); // => { "hello": 2, "world": 1 }
countWords("hello"); // => { "hello": 1 }
countWords(""); // => {}
