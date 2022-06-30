//Write a function averageGrade that accepts an array of student grades as values and returns the average grade and if the array is empty return "Please enter at least one grade".
//اكتب دالة متوسط الدرجة التي تقبل مصفوفة من تقديرات الطلاب كقيم وتعيد التقدير المتوسط وإذا كانت المصفوفة فارغة يتم إرجاع "الرجاء إدخال تقدير واحد على الأقل".

const averageGrade = function (grades) {
  if (grades.length === 0) {
    return "Please enter at least one grade";
  }
  return (
    grades.reduce(function (totle, element) {
      return totle + element;
    }) / grades.length
  );
};

averageGrade([100, 80, 95, 67, 74]); // => 83.2
averageGrade([100, 90, 80, 70]); // => 85
averageGrade([100, 90, 80, 70]); // => 85
averageGrade([]); // => "Please enter at least one grade"
