//Write a function olderThan that accepts two objects personOne, personTwo and returns a string that represent who is older than the other.
//اكتب دالة أقدم من تلك التي تقبل كائنين شخص واحد ، شخص اثنان وتعيد سلسلة تمثل من هو أقدم من الآخر.

const olderThan = function (personOne, personTwo) {
  if (personOne.age > personTwo.age) {
    return personOne.name + " is older than " + personTwo.name;
  } else if (personOne.age < personTwo.age) {
    return personTwo.name + " is older than " + personOne.name;
  } else {
    return personTwo.name + " is as old as " + personOne.name;
  }
};

olderThan({ name: "John", age: 23 }, { name: "Jane", age: 26 }); // => "Jane is older than John"
olderThan({ name: "Mark", age: 30 }, { name: "Smith", age: 25 }); // => "Mark is older than Smith"
olderThan({ name: "Marry", age: 20 }, { name: "Sarah", age: 20 }); // => "Marry is as old as Sarah"
