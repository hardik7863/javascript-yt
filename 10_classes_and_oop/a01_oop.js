const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        //if you will print username without using 
        //this keyword it will give error : username is not define
        
        console.log(this);// it will return the all values writen in users 
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); 
//In global context,it will print empty object {}
// whereas in browser it will give window {}

//Constructor function
// const promiseOne =new Promise();
// const date =new Date();
//here new keyword is the construction function
//it allows to create the multiple instances from one object 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
    //even if I avoid writing return this it will implicitly return it
}

// const userOne = User("hitesh", 12, true);
// const userTwo = User("ChaiAurCode", 11, false);
// console.log(userOne);
//you will observe that the value of userOne is overwrite and 
//you will get the information of userTwo on printing userOne

//that is why new keyword is used becoz new keyword give you new instance 
//or new copy everytime and one copy will not affect other copy

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne);
// console.log(userOne.constructor);
// console.log(userTwo);

//when we use new keyword 
//step-1: an object is created which is known as instance
//step-2: construction function is called then it packs the arguemnts and gives to you
//step-3: this keyword and the arguments you have written are injected in it
//step-4: you get all this inside the function

//instance of()
//used for verifying whether the object belongs to that function 
//eg:
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// const auto = new Car('Honda', 'Accord', 1998);

// console.log(auto instanceof Car);
// // Expected output: true

// console.log(auto instanceof Object);
// // Expected output: true
