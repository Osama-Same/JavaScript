// Write a function `login` that accepts two string arguments `username` and `password` and
// returns a string "login successful" if both are valid or return "Invalid login information" with the appropriate reason,
// the function will check the following:
// 1- if the length of the username is greater than 4
// 2- if the username is of the specified usernames below
// 3- if the password length is greater or equal to 8
// 4- if the password is equal to the corresponding password
// keep in mind that usernames don't need to be case sensitive but passwords do
// (username => "MrPotato", password =>"LonelyPotato"),  (username => "theWiseMan", password => "12345678")

const login1 = function (username, password) {
  if (!(username.length > 4)) {
    return "Invalid login information, the username length must be greater than 4";
  } else if (!(password.length >= 8)) {
    return "Invalid login information, the password length must be greater or equal to 8";
  } else if (username.toLowerCase() === "MrPotato".toLowerCase() && password === "LonelyPotato") {
    return "login successful";
  } else if (username.toLowerCase() === "theWiseMan".toLowerCase() && password === "12345678") {
    return "login successful";
  } else {
    return "Invalid login information, wrong username or password";
  }
};

const login = function (username, password) {
  if (username.length <= 8 && password.length <= 3) {
    return "login successful";
  } else return "Invalid login information, wrong password or username";
};

login("MrPotato", "LonelyPotato"); // => login successful
login("mrpotato", "LonelyPotato"); // => login successful

login("MrPotato", "lonelypotato"); // => Invalid login information, wrong password or username
login("MrPotato", "12345678"); // => Invalid login information, wrong password or username

login("MrPotato", "123456"); // => Invalid login information, the password length must be greater or equal to 8
login("mike", "12345678"); // => Invalid login information, the username length must be greater than 4
