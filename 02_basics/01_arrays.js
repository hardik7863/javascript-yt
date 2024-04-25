// array
//Shallow copy and deep copy 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4) //array also has access to prototype properties
// console.log(myArr[1]);

// Array methods

// myArr.push(6)//add the element at the end
// myArr.push(7)
// myArr.pop() //remove the last element 

// myArr.unshift(9) // it will insert the element at the starting of array
// myArr.shift()//remove the elemenet from the starting   

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // it will return -1 because it doesnt exit
// console.log(myArr.indexOf(3)); 

// const newArr = myArr.join() 
// it will cpoy the array elements and convert it into strings

// console.log(myArr);//object
// console.log( newArr);//string


// slice, splice

console.log("A ", myArr);  

const myn1 = myArr.slice(1, 3) //here 3 is not included

console.log(myn1);
console.log("B ", myArr);

//remove the element from original array and can store it into different array
const myn2 = myArr.splice(1, 3)//here 3 is included
console.log("C ", myArr);
console.log(myn2);
