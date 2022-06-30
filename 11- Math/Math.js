//Math.round()
//Math.round(x) returns the nearest integer:

//Example
Math.round(4.9); // returns 5
Math.round(4.7); // returns 5
Math.round(4.4); // returns 4
Math.round(4.2); // returns 4
Math.round(-4.2); // returns -4

//Math.ceil()
//Math.ceil(x) returns the value of x rounded up to its nearest integer:

//Example
Math.ceil(4.9); // returns 5
Math.ceil(4.7); // returns 5
Math.ceil(4.4); // returns 5
Math.ceil(4.2); // returns 5
Math.ceil(-4.2); // returns -4

//Math.floor()
//Math.floor(x) returns the value of x rounded down to its nearest integer:

//Example
Math.floor(4.9); // returns 4
Math.floor(4.7); // returns 4
Math.floor(4.4); // returns 4
Math.floor(4.2); // returns 4
Math.floor(-4.2); // returns -5

// Math.sign()
// Math.sign(x) returns if x is negative, null or positive:

//Example
Math.sign(-4); // returns -1
Math.sign(0); // returns 0
Math.sign(4); // returns 1

//Math.pow()
//Math.pow(x, y) returns the value of x to the power of y:

//Example
Math.pow(8, 2); // returns 64

// Math.sqrt()
// Math.sqrt(x) returns the square root of x:

//Example
Math.sqrt(64); // returns 8

// Math.abs()
// Math.abs(x) returns the absolute(positive) value of x:

// Example
Math.abs(-4.7); // returns 4.7

//Math.min() and Math.max()
//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

//Example
Math.min(0, 150, 30, 20, -8, -200); // returns -200
//Example
Math.max(0, 150, 30, 20, -8, -200); // returns 150

//Math.random()
//Math.random() returns a random number between 0(inclusive), and 1(exclusive):

//Example
// Returns a random number:
Math.random();
Math.floor(Math.random() * 10); // Returns a random integer from 0 to 9
Math.floor(Math.random() * 10) + 1; // Returns a random integer from 1 to 10

// A Proper Random Function

//This JavaScript function always returns a random number between min(included) and max(excluded):

//Example
function getRndInteger1(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRndInteger2(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
