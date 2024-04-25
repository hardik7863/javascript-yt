const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


//chaining :- applying two or more two methods simultaneously
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)//first method's result is pass into second method
                .filter( (num) => num >= 40)//second's result is passed in third method

console.log(newNums);