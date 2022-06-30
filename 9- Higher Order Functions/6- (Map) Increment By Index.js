//Write a function incrementByIndex that accepts and array of nested arrays that hold numbers as values and returns an array were each element of the nested arrays is incremented by the index of that nested array.
//اكتب فهرس زيادة دالة يقبل مصفوفة من المصفوفات المتداخلة التي تحمل أرقامًا كقيم وتعيد مصفوفة ، حيث يتم زيادة كل عنصر من عناصر المصفوفات المتداخلة بواسطة فهرس تلك المصفوفة المتداخلة.

const incrementByIndex = function (array) {
  return array.map(function (element, index) {
    return element.map(function (number) {
      return number + index;
    });
  });
};
// the first nested array's values were incremented by 0 since it is the first index, second nested array was incremented by 1 and last one by 2
incrementByIndex([
  [1, 2, 3],
  [2, 7, 9],
  [10, 3, 44],
]);
incrementByIndex([
  [1, 2, 3],
  [3, 8, 10],
  [12, 5, 46],
]); //[[1, 2, 3], [3, 8, 10], [12, 5, 46]]
