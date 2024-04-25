
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){//number 1and number 2 are parameters

    // let result = number1 + number2
    // return result
    return number1 + number2 
    //after return nothing will be print even if you do console.log("something")
}

const result = addTwoNumbers(3, 5)// 3 and 5 is argument 

// console.log("Result: ", result);

function loginUserMessage1(username) {
    return `${username} just logged in`
    
}

// console.log(loginUserMessage1("hitesh")); //hitesh just logged in
//in case if you dont pass anything in the function then it will return undefine 
//eg:undefined just logged in

function loginUserMessage2(username){
    if(username===undefined){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage2());

//Professiaonal way of doing it
function loginUserMessage3(username = "sam"){
    if(!username){ //same way of comparing with undefined  
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//in this case by deafult sam will be print 
//if no value is pass otherwise passed value here hitesh will be print

// console.log(loginUserMessage3("hitesh"))

// ...num1 here ... represents rest operator 
//rest operator and split operator are same it depends on their usecase
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))
// it will return an array i.e. [ 200, 400, 500, 2000 ]

function calculateCartPrice1(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice1(200,400,500,2000));
// [ 500, 2000 ] val1 and val2 will store 200 and 300 respectively


//object passing in function

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//indirectly passing objects
// handleObject(user)


//Directly passing object
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
//Indirectly passing array
// console.log(returnSecondValue(myNewArray));

//directly passing array
console.log(returnSecondValue([200, 400, 500, 1000]));