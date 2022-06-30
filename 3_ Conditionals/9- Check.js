//Check out the following examples and solve the question.
//تحقق من الأمثلة التالية وحل السؤال.

// you could use the `toLowerCase` or `toUpperCase `string methods to check if a string matches without it being case sensitive
"HeLlO wOrlD".toLowerCase() === "hello world"; // => true
"HeLlO wOrlD".toUpperCase() === "hello world".toUpperCase(); // => true
// one handy string property `length` is used to return the length of a string, could be useful
//  if you are expecting the input to be in a certain length for example
"myPassword".length <= 15; // => true
"Hello World".length === 11; // => true, notice how even the empty space " " was counted as a character
