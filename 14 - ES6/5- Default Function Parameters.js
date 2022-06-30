// default function parameters
const exampleFunction = (a = 10, b = 12) => a + b;

exampleFunction(1, 2); // => 3
exampleFunction(1); // => 13
exampleFunction(); // => 22
