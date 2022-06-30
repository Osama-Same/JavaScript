//Write a function isPropertyOf that accepts a string and an object and return true if the string is a property of the object and return false if it isn't.
// كتابة دالة هي خاصية من التي تقبل سلسلة وكائن وإرجاع صحيح إذا كانت السلسلة خاصية للكائن وإرجاع خطأ إذا لم تكن كذلك.
const isPropertyOf = function (string, object) {
  if (object[string]) {
    return true;
  }
  return false;
};
isPropertyOf("hello", { hello: "world" }); // => true
isPropertyOf("world", { hello: "world" }); // => false
