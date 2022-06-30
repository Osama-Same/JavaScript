//Write a function compare that accepts an array and an object and returns true if all the array values are present as object values.

const compare = function (array, object) {
  const obj = {};

  for (let key in object) {
    obj[object[key]] = 1;
  }
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      return false;
    }
  }
  return true;
};

compare(["one", "two", "three"], { 0: "one", 1: "two", 2: "three" }); // => true
compare(["one", "two", "four"], { 0: "one", 1: "two", 2: "three" }); // => false
compare(["one", "two"], { foo: "one", bar: "two", baz: "three" }); // => true
compare(["one", "two", "three"], { foo: "one", bar: "two" }); // => false
