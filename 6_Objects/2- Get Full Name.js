//Write a function getFullName that accepts an object representing a person and returns that person's full name in a string.
//اكتب وظيفة الحصول على الاسم الكامل الذي يقبل كائنًا يمثل شخصًا ويعيد الاسم الكامل لهذا الشخص في سلسلة.
const getFullName = function (person) {
  return person.first + " " + person.middle + " " + person.last;
};

getFullName({ first: "Elon", middle: "Reeve ", last: "Musk" }); // => "Elon Reeve Musk"
getFullName({ first: "John", middle: "Mark ", last: "Doe" }); // => "John Mark Doe"
