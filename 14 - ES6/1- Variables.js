// constant variables
const x = 10;

// block scoped variables
if (true) {
  const a = 1;
  let b = 2;
}

a; // => Uncaught ReferenceError: a is not defined
b; // => Uncaught ReferenceError: b is not defined


var xx = 10;
// Here x is 10
{
  let xx = 2;
  // Here x is 2
}
// Here x is 10

var xxx = 10;
// Here x is 10
{
  const xxx = 2;
  // Here x is 2
}
// Here x is 10