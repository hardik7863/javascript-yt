// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//*global scope ke pollution sey problem hote hai kai 
//bar usko hata ne ke liye yeh use kiya hai

//possible error can arise due to not using ; at end 

//Refer copy for next Topic JavaScript Execution Context