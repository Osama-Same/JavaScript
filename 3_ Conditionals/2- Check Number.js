//Write a function deposit that accepts an argument amount and returns the deposited amount, the function should only accept positive number arguments otherwise return "Please enter a valid number"
//اكتب وديعة دالة تقبل مقدار الوسيطة وتُرجع المبلغ المودع، ويجب أن تقبل الدالة وسيطات الأرقام الموجبة فقط وإلا فسيتم إرجاع "يرجى إدخال رقم صالح"
const deposit = function (amount) {
  if (typeof amount === "number" && amount > 0) {
    return amount;
  }
  return "Please enter a valid number";
};
console.log(deposit(100)); // => 100
console.log(deposit("100")); // => Please enter a valid number
