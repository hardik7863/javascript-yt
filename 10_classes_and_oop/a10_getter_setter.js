//getter and setter
//these are used for if you have a class which have some properties 
//then you dont want to give access of the property to all or customize them before giving access
// name should be same in get and set

//class based
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }//you need to define getter along with setter both will come together
    set email(value){
        this._email = value 
        //this underscore is nothing but making new variable
    }

    get password(){
        //return this.password.toUpperCase()
       
        return `${this._password}hitesh`
    }

    set password(value){
         //this.password = value
         //error max call stack size exceeded
         //we rearly get this error
         //in this error constructor is setting the value and 
         //your also calling constructor for setting value 
         //due to which a race start between them and error occurs
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);