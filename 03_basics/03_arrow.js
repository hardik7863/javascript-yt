const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//this keyword is used for current context 
//eg: in above user,this keyword can be use to access all 
//the variables which are in the scope of user 

// user.welcomeMessage();
//OP:-
//hitesh , welcome to website
// {
//     username: 'hitesh',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

// user.username = "sam";
// user.welcomeMessage();
//OP:-
//sam , welcome to website
// {
//     username: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

// console.log(this); //In node, this will return empty string whereas 
// in browser it will show global window object
//reason:-previously javascript can only be execute within the browser ,
//js engine which execute the js use to found within the browser
//but now days js engine is separated from the browser now it is called node , deno ,bun

function chai1(){
        
       // console.log(this); //it returns global objects in node environment
    }
function chai2(){
            let username = "hitesh"
          //  console.log(this); //it return global objects in node environment
        }



function chai3(){
    let username = "hitesh"
    console.log(this.username);//undefined
    //observation:- we are unable to use this 
    //keyword within the function we can properly 
    //access the this keyword in object
}


// chai()

// const chai4= function () {
//     let username = "hitesh"
//     console.log(this.username);//undefined
//     console.log(this);//empty object
// }

//mistake ;- chai4 and chai  diference people often say we cannot use this keyword in arrow function it will give undefine 
//but in case of normal function it will also return undefine 

//Arrow function
const chai =  () => {
    let username = "hitesh"
    // console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }//7

//when we use {} we need to use return 
//otherwise or in case of () we not need to use return

// const addTwo = (num1, num2) =>  num1 + num2 //7

// const addTwo = (num1, num2) => ( num1 + num2 ) //7

// const addTwo = (num1, num2) => (username: "hitesh") 
//will give error we need to use {}
const addTwo = (num1, num2) => ({username: "hitesh"})
//{ username: 'hitesh' }


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()