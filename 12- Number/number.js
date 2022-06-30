console.log("isFinite" + " " + Number.isFinite(123)); // true
console.log("isFinite" + " " + Number.isFinite("123")); // false
console.log("isInteger" + " " + Number.isInteger(123)); // true
console.log("isInteger" + " " + Number.isInteger("123")); // false
console.log("isInteger" + " " + Number.isInteger(-1.23)); // fales
console.log("isNaN" + " " + Number.isNaN(123)); // fales
console.log("isNaN" + " " + Number.isNaN("123")); // fales
console.log("isNaN" + " " + Number.isNaN(-1.23)); // fales
console.log("isNaN" + " " + Number.isNaN(0 / 0)); // true
console.log("isNaN" + " " + Number.isNaN(5 - 2)); // fales
console.log("isNaN" + " " + Number.isNaN(0)); // fales
console.log("isNaN" + " " + Number.isNaN("Hello")); // fales
console.log("isNaN" + " " + isNaN("Hello")); // true
console.log("isNaN" + " " + Number.isNaN("2005/12/12")); // fales
console.log("isNaN" + " " + Number.isNaN(" ")); // fales
console.log("isSafeInteger" + " " + Number.isSafeInteger(123)); //true
console.log("isSafeInteger" + " " + Number.isSafeInteger(-123)); //true
console.log("isSafeInteger" + " " + Number.isSafeInteger("123")); //fales
console.log("toExponential" + " " + (5.56789).toExponential()); //5.56789e+0
console.log("toExponential" + " " + (5.56789).toExponential(3)); //5.568e+0
console.log("toFixed" + " " + (5.56789).toFixed()); //6
console.log("toFixed" + " " + (5.56789).toFixed(2)); // 5.57
console.log("toLocaleString" + " " + (1000000).toLocaleString()); // 1,000,000
console.log("toLocaleString" + " " + (1000000).toLocaleString("fi-FI")); //  1 000 000
console.log("toLocaleString" + " " + (1000000).toLocaleString("en-US", { style: "currency", currency: "USD" })); //  $1,000,000.00
console.log("toPrecision" + " " + (13.3714).toPrecision(2)); // 13
console.log("toPrecision" + " " + (0.001658853).toPrecision(2)); // 0.0017
console.log("toPrecision" + " " + (0.001658853).toPrecision(3)); //  0.00166
console.log("toString" + " " + (15).toString()); // '15'
