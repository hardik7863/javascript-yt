// const tinderUser = new Object() //singleton object
const tinderUser = {} //non - singleton objects
// both will create empty objects
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);//hitesh
// console.log(regularUser.fullname?.userfullname.firstname);//will study in future lectures
// ? often use while getting responses from api otherwise too much if else will be use
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //this will give same error as we get in array
//i.e. object inside object
//cosnt obj3 =object.assign(obj1,obj2,obj4) //same as below code
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //return datatype is array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//convert key and value as array inside array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//one way of writing
// course.courseInstructor

//another way of writing
//destructuring
const {courseInstructor:instructor} = course

// console.log(courseInstructor);//hitesh
console.log(instructor);//hitesh

//JSON format api
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

