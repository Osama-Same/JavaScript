//Write a function evenLengthOddIndex that accepts an array of strings and returns a new array of only the even length words that are in an odd index.
//اكتب دالة حتى طول الفهرس الفردي الذي يقبل مصفوفة من السلاسل ويعيد مصفوفة جديدة من الكلمات ذات الطول الزوجي فقط الموجودة في فهرس فردي.
const evenLengthOddIndex = function (strings) {
  return strings.filter(function (e, i) {
    return !(e.length % 2) && i % 2;
  });
};
evenLengthOddIndex(["word", "care", "car", "food", "cast", "cat"]); // => ["care", "food"]
evenLengthOddIndex(["word", "care", "food", "car", "cast", "cat"]); // => ["care"].
evenLengthOddIndex(["word", "cat", "food"]); // => []
