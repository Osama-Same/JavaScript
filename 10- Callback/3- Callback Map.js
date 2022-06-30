  //By using the function loop, write a function map that accepts two arguments array and callback and iterates over items and return a new array after modifying all the elements by using the callback function (Just like map).

        // DO NOT USE ANY ARRAY METHODS (forEach, reduce, map, filter)
        const map = function (array, callback) {
            const newArray = [];
            loop(array, function (element) {
                newArray.push(callback(element));
            });
            return newArray;
        };

        map([1, 2, 3], function (number) {
            return number * 10;
        }); // => [10, 20, 30]
