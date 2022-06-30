// [1] The function writes the string argument, first name and last name, then returns a string containing your full name
// [1] تقوم الوظيفة بكتابة وسيطة السلسلة ، والاسم الأول واسم العائلة ، ثم تقوم بإرجاع سلسلة تحتوي على اسمك الكامل

const fullName = function (firstName, lastName) {
  return firstName + " " + lastName;
};
console.log(fullName("John", "Doe")); // => "John Doe"
console.log(fullName("Mark", "Smith")); // => "Mark Smith"
