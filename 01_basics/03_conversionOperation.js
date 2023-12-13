//pending hai bruh
let score ="33abc"//javascript has lots of problem /bugs
let score2 = null 
let score3 = undefined 
let score4 = true
let score5 = "hardik"
console.log(typeof score);//that is why people prefer typescript
console.log(typeof (score));
//typecaste
let valueInNumber =Number(score)
let valueInNumber2 =Number(score2)
let valueInNumber3 =Number(score3)
let valueInNumber4 =Number(score4)
let valueInNumber5 =Number(score5)
console.log(typeof valueInNumber);
console.log(valueInNumber);//it will give NaN (not a number)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);// it will give 0
console.log(typeof valueInNumber3);
console.log(valueInNumber3);// it will give NaN(not a number)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);// it will give 1
//if score4=false then it will give 0 
console.log(typeof valueInNumber5);
console.log(valueInNumber5);//it will give NaN(not a number)
//"33" =>33
//"33abc"=>NaN
//true =>1; false =>0

let isLoggedIn=1
let BooleanIsLoggedIn=Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);
