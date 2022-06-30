//Write a function validateMessage that accepts an object representing a message and return the object if it is valid and after removing any extra keys, the message will consist of three keys username, message, date with all of their values as strings return the object only if all three keys are strings, if the number of keys is more than three then delete the extra keys, if the message doesn't have the right data type then return invalid message
//اكتب رسالة تحقق من صحة الوظيفة تقبل كائنًا يمثل رسالة وتعيد الكائن إذا كان صالحًا وبعد إزالة أي مفاتيح إضافية ، ستتكون الرسالة من ثلاثة مفاتيح اسم المستخدم والرسالة والتاريخ مع جميع قيمها حيث تقوم السلاسل بإرجاع الكائن فقط إذا كانت جميع المفاتيح الثلاثة عبارة عن سلاسل ، وإذا كان عدد المفاتيح أكثر من ثلاثة ، فاحذف المفاتيح الإضافية ، وإذا كانت الرسالة لا تحتوي على نوع البيانات الصحيح ، فقم بإرجاع رسالة غير صالحة

const messageOne = {
  username: "John",
  message: "Hello",
  date: "01/01/2020",
  someKey: "someValue",
};

const messageTwo = {
  username: 10,
  message: "Hello",
  date: "01/01/2020",
};

const validateMessage = function (message) {
  for (let key in message) {
    if (key !== "username" && key !== "message" && key !== "date") {
      delete message[key];
    } else {
      if (typeof message[key] !== "string") {
        return "invalid message";
      }
    }
    return message;
  }
};
validateMessage(messageOne); // => {username: "John", message: "Hello", date:"01/01/2020"}
validateMessage(messageTwo); // => invalid message
validateMessage(messageOne); // => {username: "John", message: "Hello", date:"01/01/2020"}
validateMessage(messageTwo); // => invalid message
