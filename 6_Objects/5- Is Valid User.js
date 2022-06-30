//Write a function isValidUser that accepts an object representing login information and returns true if the User is valid otherwise return false, read the comments for more information.
// things to validate:
// 1- length of the email is greater than or equal 6
// 2- length of the password is greater than or equal 8
// 3- email contains `@` and `.com`
// 4- the user must be in the users object
// 5- both of the passwords match
// 6- when you compare information make sure to reference the users object and access the value form there
const users = {
  mrpotato: {
    email: "mr.potato@gmail.com",
    password: "LonelyPotato",
  },
  thewiseman: {
    email: "wiseMan9999@gmail.com",
    password: "12345678",
  },
};

const isValidUser = function (loginInfo) {
  const email = loginInfo.email;
  const password = loginInfo.password;
  const username = loginInfo.username.toLowerCase();
  if (email.length >= 6 && password.length >= 8) {
    if (email.includes("@") && email.includes(".com")) {
      if (email === users[username].email && password === users[username].password) {
        return true;
      }
    }
  }
  return false;
};

isValidUser({
  username: "MrPotato",
  email: "mr.potato@gmail.com",
  password: "LonelyPotato",
}); // => true

isValidUser({
  username: "MrPotato",
  email: "mr.potato@gmail.com",
  password: "Lonely",
}); // => false

isValidUser({
  username: "MrPotato",
  email: "mr.potato.gmail.com",
  password: "LonelyPotato",
}); // => false
