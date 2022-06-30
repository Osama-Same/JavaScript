// [6] Write a profit calculation function that accepts three arguments and returns the net profit. Unit sold, unit cost, unit price

const calculateProfit = function (unitsSold, unitCost, unitPrice) {
  return unitsSold * (unitPrice - unitCost);
};
console.log(calculateProfit(10, 5, 15)); // => 100
console.log(calculateProfit(4, 2, 5)); // => 12
