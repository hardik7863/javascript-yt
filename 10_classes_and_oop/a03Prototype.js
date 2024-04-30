//javaScript has default prototype behaviour
//if javascript doesnot loose hope if it didn't 
//find something on one layer then it will access parent,grand parents to search 

//Arrow function does not have this keyword because there prototype comes
//access ofnew keyword,classes you get ,this keyword is working,
//Prototypial inheritance all exist because of prototype

//Goal:how new functionalities are added or how we can add our method to the prototype

let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);
//there is nothing called truelength in js 
//you need to find the length of string excluding the spaces
//one solution is 
// console.log(myName.trim().length); 
//but we dont want to do this for many string we want to add our own functionality


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//injecting function or property to the objects since arrays,string function all are children of objects
//therefore function can accessible to all .
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

//on injecting function or property to the array cannot be access by objects 
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()   //hitesh is present in all objects
// myHeros.hitesh()     //hitesh is present in all objects
// myHeros.heyHitesh()  //Hitesh says hello
// heroPower.heyHitesh() //error not accessible

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

//all objects have default properties but each objects have different property.
//inorder to link two objects  __prototype__ is used.
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//old one way
}
//old 2 nd way
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()