const accountId=14453
//Variables declared by let are only available inside the block where they're defined. 
//Variables declared by var are available throughout the function in which they're declared.
//we prefer to use let becoz if we change the value of variable assigned through var 
//then the value in the whole code will be change
let accountEmail="hardikbatwal@google.com"
var accountPassword ="12345"
accountCity="jaipur"//it is not prefer to declare variable like this
//but you can
let accountState;
 //it up to you to use terminator (";") or not

 //accountId=2 //not allowed cant change the value of const variable

accountEmail="hardik@google.com"
accountPassword="212345"
accountCity="bengaluru"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//above console.table is use to print the in tabular form

//if we print accountstate in tabular form it will show undefined 
/*
ek jagah change karunge sab jagah change ho jayega
Prefer not to use var instead use let
because of issue in block scope and functional scope
*/ 