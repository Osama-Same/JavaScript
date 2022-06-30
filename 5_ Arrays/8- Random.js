//Write a function randomFruit that accepts an array of fruits and returns a random element from that array.
const fruits1 = ["Apple", "Banana", "Strawberry", "Mango"];
const randomFruit = function (array) {
  array = fruits1;
  const randomIndex = Math.ceil(Math.random() * array.length - 1);
  return array[randomIndex];
};

randomFruit(fruits1); // => Apple
randomFruit(fruits1); // => Apple
randomFruit(fruits1); // => Strawberry
randomFruit(fruits1); // => Banana
