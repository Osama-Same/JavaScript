// [7] Write a function that calculates the total invoice amount that accepts the total of three arguments total, tax percentage, exemptions and returns the total after adding tax and inversion.

// [7] كتابة دالة حساب إجمالي مبلغ الفاتورة الذي يقبل إجمالي ثلاث وسيطات الإجمالي، والنسبة المئوية للضريبة، والإعفاءات وإرجاع الإجمالي بعد إضافة الضريبة والقلب.
const calculateTotalBillAmount = function (total, taxPercentage, tip) {
  return total * (1 + taxPercentage) + tip;
};
console.log(calculateTotalBillAmount(10, 0.16, 0)); // => 11.6
console.log(calculateTotalBillAmount(40, 0.16, 2)); // => 48.4
