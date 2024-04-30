//javaScript has default prototype behaviour
//if javascript doesnot loose hope if it didn't 
//find something on one layer then it will access parent,grand parents to search 

//Arrow function does not have this keyword because there prototype comes
//access ofnew keyword,classes you get ,this keyword is working,
//Prototypial inheritance all exist because of prototype

function multipleBy5(num){
    // this.num=num
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
//this gives methods with internal properties

function createUser(username, score){
    this.username = username
    this.score = score
}

//function is also object and null can we inject new functionalities to it
//yes you can
createUser.prototype.increment = function(){
    this.score++//this matlab jis ne bulaya
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
//without new it will give error
//*code not working and its expalination helps u in selecting in the interview
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/* new keyword working 

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// Javascript do not take constructor function through class but from new keyword.
//behind the scene actually it happens in this way
// there is just the wrapper of class on it 
//so that everyone can use it comfortablly for those who coming from cpp or java background also can use it

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/