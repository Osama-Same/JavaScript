//Write a function search that accepts an array of strings and a string then returns whether the string is inside of the array or not.
const fruits2 = ["Apple", "Banana", "Strawberry", "Mango"];
const search = function (array, string) {
  array = fruits2;
  if (array[array.indexOf(string)]) {
    return true;
  }
  return false;
};
search(fruits2, "Apple");
search(fruits2, "Banana");
search(fruits2, "John");
