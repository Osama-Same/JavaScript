//Write a function getLength that accepts a string, and returns the length of the string.
//اكتب دالة تحصل على الطول يقبل سلسلة ، وتعيد طول السلسلة.

const getLength = function (string) {
  if (string.length === 0) {
    return 0;
  }
  return 1 + getLength(string.slice(1));
};

getLength("hello"); // => 5
getLength("John"); // => 4
getLength(""); // => 0
