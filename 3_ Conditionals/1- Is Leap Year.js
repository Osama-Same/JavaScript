//Write a function isLeapYear that accepts a number argument year and returns true if the year is a leap year, leap years are divisible by 4 but non leap years are not divisible by 100 for the exception of 400 (leap years are also divisible by 400)
const isLeapYear = function (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isLeapYear(1699));