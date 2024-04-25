const name = "hitesh"
const repoCount = 50

// old way of Concatenation
// console.log(name + repoCount + " Value");

//Modern way of writing using backsticks 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//Another way of creating string
//new keyword is used to create objects
const gameName = new String('hitesh-hc-com') //herre string as object   

// console.log(gameName[0]);
// console.log(gameName.__proto__);//syntax to access various methods which we can apply on it
console.log(gameName.__proto__.indexOf('r')); //one way of doing this 
//and you can use directly as well as given below

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //last value 4 is not included
console.log(newString);

const anotherString = gameName.slice(-8, 4)//you can also give negative values
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //it remove extra space 
//types of trim 
// 1) trimStart() or trimLeft()
// 2) trimEnd() or trimRight()
//refer this :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

//explore string methods at mdn website