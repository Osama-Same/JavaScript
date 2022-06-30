/* 

Operator	Description	    Example	      Result in y	     Result in x	    
+	        Addition	    x = y + 2	   y = 5	          x = 7	
-	        Subtraction	    x = y - 2	   y = 5	          x = 3	
*	        Multiplication	x = y * 2	   y = 5	          x = 10	
*	        Exponentiation 	x = y ** 2	   y = 5	          x = 25	
/	        Division	    x = y / 2	   y = 5	          x = 2.5	
%	        Modulus         x = y % 2	   y = 5	          x = 1	
++	        Increment	    x = ++y	       y = 6	          x = 6		
--	        Decrement	    x = --y	       y = 4	          x = 4
*/
// Assign values to variables and add them together:

let x = 5; // assign the value 5 to x
let y = 2; // assign the value 2 to y
let z = x + y; // assign the value 7 to z (5 + 2)

//توقع قيمة التعبيرات التالية ثم جربها في وحدة التحكم
9 + 1 * 5; // => 14
9 % 2; // => 1
(9 / 3) * (10 - 7); // => 9
21 / 3 + 3 * 9 * 9 + 5; // => 255
36 / 9 + 48 - 10 / 2; // => 47

// اكتب تعبيرًا يمثل متوسط ​​علامة الامتحان ، مع العلم أنه في فصل من عشرة طلاب ، خمسة منهم حصلوا على 24/30 ، اثنان منهم حصلوا على 16/30 والباقي حصلوا على 29/30
(5 * 24 + 2 * 16 + 3 * 29) / 10;
// => 23.9

//اكتب تعبيرًا يمثل عدد الثواني في 30 يومًا

60 * 60 * 24 * 30;
//اليوم 30
//60 دقيقة
//24 ساعة
// 60 ثواني
// => 2592000

//باستخدام تسلسل السلسلة ، اكتب تعبيرًا يمثل اسمك الأول واسم العائلة والجنس والجنسية

"Osama" + " " + "Salem" + " " + "Male" + " " + "Jordan";
// => "osama salem, Male, Jordanian"

//قبل تجربة التعبيرات التالية ، حاول التنبؤ بالنتيجة

10 + "10"; // => "1010"
"10" + "10"; // => "1010"
10 + 10 + "5"; // => "205"
"Hello" + 1; // => "Hello1"
false - true; // => -1
true - false; // => 1
