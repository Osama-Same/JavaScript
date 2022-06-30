//Write a function deleteKeys that accepts an array and an object and returns the same object after removing all key-value pairs depending on the values in the array, the array will contain the key names that must be removed from the object.
const deleteKeys = function (array, object) {
  for (let i = 0; i < array.length; i++) {
    if (object[array[i]]) {
      delete object[array[i]];
    }
  }
  return object;
};

deleteKeys(["one", "two"], { one: "one", two: "two", three: "three" }); // => { three: "three" }
deleteKeys(["four", "five", "one"], { 0: "one", 1: "two", 2: "three" }); // => { two: "two", three: "three" }
