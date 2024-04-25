const score = 400
// console.log(score); //400

const balance = new Number(100)
// console.log(balance); //[Number:100]
//on using new ke  yword we can use various methods on the number 
// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); //use to get 1 decimal value 

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// c onsole.log(hundreds.toLocaleString('en-IN')); //10,00,000
//this will add commas to it 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); //normal roundoff method
// console.log(Math.ceil(4.2)); //this will give 5 even if it is 4.8 or 4.2
// console.log(Math.floor(4.8)); //it will give 4 even if it is 4.9 or 4.2
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8)  );

// console.log(Math.random());  it randomly give number between 0 and 1
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);


//to generate the random value in range btw 10 and 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)