//Explain the following.

const employeeOne = {
  id: 0,
  name: "John",
  position: "",
};

const employeeTwo = {
  id: 1,
  name: "Jane",
  position: "Developer",
};

// try the following and explain the results
// 1
if (employeeOne.id) {
  console.log(employeeOne.name);
  // المعرف يساوي 0 ، لذا سيفشل الشرط لأنه قيمة خاطئة
}
// 2
if (employeeTwo.id) {
  console.log(employeeOne.name);
}
//المعرف يساوي 1 ، لذلك سوف يمر الشرط وسيتم تسجيل الاسم لأن الرقم 1 هو قيمة حقيقية
//3
if (employeeOne.title) {
  console.log(employeeOne.name);
}
// قيمة الموضع عبارة عن سلسلة فارغة وهي قيمة خاطئة لذا سيفشل الشرط
//4
if (employeeTwo.title) {
  console.log(employeeOne.name);
}
// الموضع عبارة عن سلسلة وهي قيمة صادقة لذلك سيتم تسجيل الاسم
//5
if (employeeOne.salary) {
  console.log(employeeOne.name);
}
// الراتب ليس سمة للموظف واحد ، لذا فإن قيمته ستكون غير محددة وهي قيمة خاطئة لذا فإن الشرط سيفشل
