const fruits = ["Banana", "Orange", "Apple", "Mango"];
const points = [40, 100, 1, 5, 25, 10];
fruits.toString(); //Banana,Orange,Apple,Mango
fruits.join(" * "); //Banana * Orange * Apple * Mango
fruits.sort(); // Apple,Banana,Mango,Orange
fruits.reverse(); //Orange,Mango,Banana,Apple

//Example(Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// Concatenate (join) myGirls and myBoys
const myChildren2 = myGirls.concat(myBoys);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren3 = arr1.concat(arr2, arr3);
//console.log(myChildren3)

//Slicing an Array
const citrus1 = fruits.slice(1); //Orange,Lemon,Apple,Mango
const citrus2 = fruits.slice(3); //Apple,Mango
const citrus3 = fruits.slice(1, 3); //Orange,Lemon

//Using Math.max() on an Array

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

//Using Math.min() on an Array
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

//Sorting Object Arrays
const carsObject = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
//cars.sort(function (a, b) {return a.year - b.year;}); // Saab 2001, BMW 2010, Volvo 2016
