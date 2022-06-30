//Write a function totalBill that accepts an object representing separate bills and returns the sum of all bills.

// Make sure to loop over the bills object
const bills = {
  waterBill: 25,
  electricityBill: 50,
  hospitalBill: 1000,
};

const totalBill = function (billsObject) {
  let sum = 0;
  for (let key in billsObject) {
    sum += billsObject[key];
  }
  return sum;
};
totalBill(bills); // => 1075
