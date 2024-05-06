let score = "hitesh"

// console.log(typeof score); //string
// console.log(typeof(score)); //string

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //NaN

let xyz=null;
// console.log(typeof xyz); //object

let abc=undefined;
// console.log(typeof abc); //undefined

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false  empty string will give false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);//string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power 
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

//since string is bigger data type therfore number will be convert into string
// console.log("1" + 2);       //12 string
// console.log(1 + "2");       //12 string
// console.log("1" + 2 + 2);   //122 string
// console.log(1 + 2 + "2");   //32  it is executed left to right and then solve acordingly

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //1
// console.log(true+); //error
// console.log(+" "); //0
// console.log(""+); //error

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//Try pre and post Increment operator 
//go to the below link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// link to study conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion