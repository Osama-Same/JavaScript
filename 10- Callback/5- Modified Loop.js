
        //Modify the loop, filter, map, reduce to work with objects, if the input is an object then iterate over it and return an object instead of an array.

        const modifiedLoop = function (items, callback) {
            if (Array.isArray(items)) {
                for (let i = 0; i < items.length; i++) {
                    callback(items[i], i);
                }
            } else {
                for (const key in items) {
                    callback(items[key], key);
                }
            }
        };

        // modifiedLoop({ a: 1, b: 2, c: 3 }, function (number) {
        //   console.log(number);
        // });