//Same dataType
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// TypeScript do not allowed comparision of different datatype
//Different datatype
// console.log("2" > 1); //true   1 is converted into string
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true 

//Equality check (==) is different from comparison(<,>,>=,<=)
//The reason is that an equality check == and comparisons > > <= <=
//work differently
//Comparisons convert null to a number, treating it as 0.
//That's why (3) null>=0 is true and (1) null>0 is false



console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

// === strick equality 

console.log("2" === 2);