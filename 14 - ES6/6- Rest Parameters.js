const exampleFunction = (x, ...y) => x * y.length;

exampleFunction(5, "hello", "world"); // 5 * ["hello", "world"].length => 10
exampleFunction(5, 5, 10, 20); // 5 * [5, 10, 20].length => 15
