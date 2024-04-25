//Objects can be created either as constructor or literal
//wheneever an object is created using constructor then singleton is formed
// singleton :- it means creating one type of objects
//whenever the object is created with literals then it is not singleton type multiple instances can be form

// Object.create 
//syntax for creating objects using constructor 

// object literals 
//syntax for creating objects using literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // mySym;"mykey1", //if we do so then it is converted into string 
    [mySym]: "mykey1", //In this way symobol is declared as key 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//using dot operator
// console.log(JsUser.email)
//dot operator cannot access the full name
// console.log(JsUser.ful name);//error

//using square brackets it provides additional functionalities
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//doubt this is still showing string datatype instead of symbol

// console.log(typeof JsUser[mySym]); 
//but on printing jsuser it is showing symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //to avoid the change the value we use
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);//function reference will return
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// op:-
// [Function (anonymous)]
// Hello JS user
// undefined
// Hello JS user, Hitesh
// undefined

//reason behind undefined need to find