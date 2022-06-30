// ES5
const myFunc = (name, age) => {
  return "hi" + name + " your age is" + age + "year old";
};
console.log(myFunc("osama", 22)); // hi osama your age is 22 year old 

// ES6
const myFunc1 = (name, age) => {
  return `hi ${name}  name   your age is  ${age}  year old`;
};
console.log(myFunc1("osama", 22)); // hi osama your age is 22 year old 
