//Write two functions deposit and withdraw that accepts a number argument amount and returns the current account balance
// اكتب وظيفتين إيداع وسحب يقبلان مبلغ وسيطة رقم ويعيد رصيد الحساب الجاري
let result = 0;
const deposit = function (amount) {
  result = result + amount;
  return result;
};

const withdraw = function (amount) {
  result = result - amount;
  return result;
};
deposit(100); // => 100
deposit(50); // => 150
withdraw(70); // => 80
deposit(50); // => 130
withdraw(100); // => 30
