// array destructuring
const array = [1, 2, 3];
const [x, y, z] = array;


const constact = {
  name: "osama",
  famillName: "salem",
  age: 22,
};
// ES5 Object
let namee = constact.name;
let famillName = constact.famillName;
let myAge = constact.age;
console.log(namee);//osama
console.log(famillName);//salem
console.log(myAge);// 22

// ES6 Object
let { name1, famillName2, age3 } = constact;
console.log(name1) // osama
console.log(famillName2) // salem
console.log(age3) // 22