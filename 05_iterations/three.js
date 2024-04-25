// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    // op:1
    // 3
    // 4
    // 5
    // 2
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}
//op:-
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);//map are know for their unique values
// op:-
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }
  

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//for of dont work for objects


// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }