const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
//above code is use to get property description of object
console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
//since writable is false it is hard core coded in cpp that its value cant be change
//even we can create such object and hard code them so that its value cannot be change
//it is MATH.PI is in read only mode  
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);//value will not change

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true, 
    //if false then it will became non iterable 
    //we cannot get the value through loop
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of chai) {
    console.log(`${key}:${value}`);
}
//give error because object is not iterable in this case


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}