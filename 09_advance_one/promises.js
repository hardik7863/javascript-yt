// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()//if you will avoid writing resolve() then code inside then() will not work
    }, 1000)
})
//resolve has direct connection with then()
promiseOne.then(function(){
    console.log("Promise consumed");
})

//another way of writing 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})//can pass objects
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// const username=promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// console.log(username);
// this will give errror we cannot use in this way


 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//alternative to .then() and .catch() 
//async await cannot handle errors directly
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
//hiteshchoudhary's api come first instead of last and above code come below the github api of hitesh choudhary

// promise.all
// yes this is also available, kuch reading aap b kro.


//fetch API
//fetch api is the successor of XMLHttpRequest

//read below article https://blog.logrocket.com/fetch-api-node-js/

//*on doing promise() you get error 404 in return then it will be through response or reject 
//answer response

// A fetch() promise only rejects when the request fails, for example, because of a 
//badly-formed request URL or a network error. A fetch() promise does not reject 
//if the server responds with HTTP status codes that indicate errors (404, 504, etc.). 
//Instead, a then() handler must check the Response.ok and/or Response.status properties.