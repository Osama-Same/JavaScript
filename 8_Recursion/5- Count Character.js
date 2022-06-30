    //Write a function countCharacter that accepts a string, and a character and returns the number of times the character was repeated, using recursion.
        //اكتب حرف عدد الوظائف الذي يقبل سلسلة ، وحرفًا ويعيد عدد مرات تكرار الحرف ، باستخدام العودية.

        const countCharacter = function (string, character) {
            if (string === "") {
                return 0;
            }
            if (string[0] === character) {
                return 1 + countCharacter(string.slice(1), character);
            }
            return 0 + countCharacter(string.slice(1), character);
        };
        countCharacter("hello", "l"); // => 2
        countCharacter("hello", "e"); // => 1
        countCharacter("hello", "z"); // => 0