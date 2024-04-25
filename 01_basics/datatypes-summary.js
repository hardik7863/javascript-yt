//the data type is differentiated on bases of how data is storeed 
//in the memory and how you can access them.

//  Primitive (call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt:- used for high   scientific value 
                  //typeof()
const score = 100 //number
const scoreValue = 100.3 //number 

const isLoggedIn = false //boolean
const outsideTemp = null //object
let userEmail;           //undefined
const id = Symbol('123') //symbol
const anotherId = Symbol('123') //Symbol
//values of Symbol are never same  
console.log(id === anotherId); //false

const bigNumber = 3456543576654356754n //  bigint
console.log(typeof bigNumber);
//on adding n at the last will make it bigint data type

// JS is dynamicaaly typed or statically typed ??
//Dynamically-typed languages are those (like JavaScript) 
//where the interpreter assigns variables a type at runtime 
//based on the variable's value at the time.


// Reference (Non primitive)

//In order to master js master objects and web events
// Array, Objects, Functions
//typeof all three above is object

//Array
const heros = ["shaktiman", "naagraj", "doga"]; 

//Object
let myObj = {
    name: "hitesh",
    age: 22,
}
//  function  
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) ,Heap(non-primitive)
//we get copy        we get original reference

let myYoutubename="hiteshchoudharydotcom"

let anothername = myYoutubename;  
anothername="chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo =userOne;
userTwo.email="hitesh@google.com"

console.log(userOne.email);//value is changed at both placess
console.log(userTwo.email);