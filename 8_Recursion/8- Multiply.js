        //Write a function multiply that accepts two number argument's and returns the multiple of both numbers without using the * operator.
        //اكتب دالة ضربًا تقبل وسيطة رقمين وتعيد مضاعف كلا الرقمين دون استخدام عامل التشغيل    
        const multiply = function (numberOne, numberTwo) {
            if (numberOne === 0) {
                return 0;
            }
            return numberTwo + multiply(numberOne - 1, numberTwo);
        };
        multiply(2, 3); // => 6