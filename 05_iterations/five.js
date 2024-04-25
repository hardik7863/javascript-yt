//forEach loop
const coding = ["js", "ruby", "java", "python", "cpp"];

// since it is call back function it dont have function name
// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item){
    console.log(item);
}

//Sending function reference
// coding.forEach(printMe)


//it can also return index and array other than just item
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )