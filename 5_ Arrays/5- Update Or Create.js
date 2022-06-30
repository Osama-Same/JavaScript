//Write a function updateOrCreate that accepts three arguments an array, value, index and returns an updated array, check the output for more information on the updated array

const updateOrCreate = function (array, value, index) {
  array[index] = value;
  return array;
};
console.log(updateOrCreate([10, 20, 30], 50, 1)); // => [10, 50, 30]
console.log(updateOrCreate([10, 20, 30], 40, 3)); // => [10, 20, 30, 40]
console.log(updateOrCreate([10, 20, 30], 100, 10)); // => [10, 20, 30, empty * 7, 100]

// Read about slice and indexOf and answer the following
