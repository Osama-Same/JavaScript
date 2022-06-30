// spread operator on arrays
// copying arrays
const arrOne = [1, 2, 3];
const arrOneCopy = [...arrOne];

arrOneCopy; // => [1, 2, 3]

// passing each element of the array as an argument
const exampleFunction = (x, y, z) => x + y + z;

// pass each elem of array as argument
exampleFunction(...[1, 2, 3]); // 1 + 2 + 3 => 6

arrOne.push(...arrOneCopy);
arrOne; // => [1, 2, 3, 1, 2, 3]

const max = Math.max(...[10, 50, 70, 90, 1]);
max; // => 90

// combining arrays
const numbersOne = [4, 5, 6];
const numbersTwo = [1, 2, 3, ...numbersOne];

numbersTwo; // => [1, 2, 3, 4, 5, 6]

// it is possible to use destructuring and spread operator together
const [a, b, ...c] = [1, 2, 3, 4, 5, 6]
a; // => 1
b; // => 2
c; // => [3, 4, 5, 6]



// spread operator on objects
const objectOne = { a: 1, b: 2, c: 3 };
const objectTwo = { a: 5, d: 4 };

const objectThree = { ...objectOne, ...objectTwo };
objectThree; // => { a: 5, b: 2, c: 3, d: 4 }
