   //Write a function search that accepts two string arguments string, letter and returns true if the letter is inside the string and returns false if it doesn't.

   const search = function (string, letter) {
    if (string.toLowerCase().search(letter.toLowerCase()) !== -1) {
        return true;
    }
    return false;
};
search('Hello', 'E'); // => true
search('Hello', 'Z'); // => false

//HINT: search for the correct method to use on MDN