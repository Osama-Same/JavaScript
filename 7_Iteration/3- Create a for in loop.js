//Create a for in loop that works on the following object and console log both the key and value.
const objectt = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};
for (key in objectt) {
  console.log(key, objectt[key]);
}
