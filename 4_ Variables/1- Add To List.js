//Write a function addToList that accepts a string argument toDo and returns the current list as a string, every time we invoke the function it should return the old toDo item + the new one
//اكتب دالة تقبل وسيطة سلسلة وترجع القائمة الحالية كسلسلة ، في كل مرة نستدعي فيها الوظيفة يجب أن تعيد العنصر القديم والعنصر الجديد
let list = "";
const addToList = function (toDo) {
  if (list === " ") {
    list = list + toDo;
  } else {
    list = list + " " + toDo;
  }
  return list;
};
console.log(addToList("Eat")); // => 'Eat'
console.log(addToList("Play")); // => 'Eat Play'
console.log(addToList("Sleep")); // => 'Eat Play Sleep'
console.log(addToList("repeat")); // => 'Eat Play Sleep repeat'
