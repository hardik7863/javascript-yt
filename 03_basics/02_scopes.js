//lexical scope
if(true){
    let x=100;
    const y=200;
    var z=300;
    l=400; 

}
// console.log(x);// error: x is not define
// console.log(y);// error: y is not define
// console.log(l); //it can be access outside the scope
// console.log(z);//300 
//z must give error like x and y but it is not giving error
//and we can access var outside the scope that is why we dont prefer var 
//there is change if we declare any variable with var then
// its value can be change outside its scope 


//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); //10
    
}



// console.log(a);//300 
// console.log(b);
// console.log(c);

// *node scope and browser scope is different i.e. 
//on going to browser then inspect then console vs node terminal 
//both have diferent scope 


//closure

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //error:1
    // console.log(website); //cannot access website outside the scope

    //error2 
    //  two() 
    //when there is function inside another function 
    //then on just calling inner function will not print 
    //the values of the variable assign in the the first function here username
    // console.log(username);
}
//in case your calling one() but you are not calling two()or commenting two()
// then it wont be printing usernam e
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    //error 1
    // console.log(website);//cannot access beyond scope
}
//error 2
// console.log(username);//cannot access beyond scope


// ++++++++++++++++++ interesting ++++++++++++++++++

//hoisting

console.log(addone(5))//6
 
//function declaration
function addone(num){
    return num + 1
}
// console.log(addone(5))


//function holding expression
// addTwo(5) //give error 
const addTwo = function(num){
    return num + 2
}
