// [8] Write a function ageInDays that accepts a number argument ageInYears and returns the age in days (ignore leap years).
// [8] اكتب سن الدالة بالأيام التي تقبل سن وسيطة رقم بالسنوات وتقوم بإرجاع العمر بالأيام (تجاهل سنوات القفزة).
const ageInDays = function (ageInYears) {
  return ageInYears * 365;
};
console.log(ageInDays(10)); // => 3650
console.log(ageInDays(19)); // => 6935
