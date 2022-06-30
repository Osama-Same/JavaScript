//Write a function familyTree that accepts an object representing a family tree and returns a string containing all names in the tree from the top to bottom.
//اكتب شجرة عائلة دالة تقبل كائنًا يمثل شجرة عائلة وتعيد سلسلة تحتوي على جميع الأسماء في الشجرة من أعلى إلى أسفل.
const family = {
  name: "John",
  child: {
    name: "Bill",
    child: {
      name: "Mark",
      child: {
        name: "Terry",
        child: null,
      },
    },
  },
};

const familyTree = function (family) {
  if (!family.child) {
    return family.name;
  }
  return family.name + " " + familyTree(family.child);
};

familyTree(family); // => "John Bill Mark"
