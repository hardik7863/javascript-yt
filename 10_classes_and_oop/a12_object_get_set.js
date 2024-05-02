//object based
//rearly used
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
//factory function Object. like in array Array.map()
console.log(tea.email);
//we dont have property with name email but still it is accessible how ?
//_ underscore means i am defining a private property that is not gonna use by normal user
// in getter and setter will not give importance to underscore and 
//find for the variable which looks similar

//behind the scence arrays.length also uses the getter and setters

//study es2022 proposal for using # for private instead of underscore
