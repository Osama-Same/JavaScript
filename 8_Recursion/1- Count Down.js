//Modify the countDown function to return a string of each number separated by - till it reaches 0
const countDown = function (number) {
  //console.log(number)
  if (number <= 0) {
    return 0;
  }
  return (number = countDown(number - 1));
};

countDown(10); // => "10-9-8-7-6-5-4-3-2-1-0"
countDown(3); // => "3-2-1-0"
