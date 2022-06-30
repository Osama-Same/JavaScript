// ES5
function myFunc(name)  {
    return "hi" + name 
  };
  console.log(myFunc("osama")); // hi osama
   
  
// ES6
const myFunc1 = (name) => {
    return "hi" + name 
  };
  console.log(myFunc1("osama")); // hi osama

const myFunc3 = name =>{`hi ${name}`}