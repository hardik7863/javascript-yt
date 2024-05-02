function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
//call function inside another function
function createUser(username, email, password){
    // SetUsername(username)
    //this function is not called only the refernce is gone
    //it seems it is called but not only reference is gone 

    //actual op:-called
    // createUser { email: 'chai@fb.com', password: '123' }

    //expected op:-called
    // createUser { username: 'chai', email: 'chai@fb.com', password: '123' }

    //refer copy
    
    // SetUsername.call(username)
    //actual op:-called
    // createUser { email: 'chai@fb.com', password: '123' }

    //expected op:-called
    // createUser { username: 'chai', email: 'chai@fb.com', password: '123' }

    SetUsername.call(this, username)

     



   //this.username =username //this step is outsourced to the Setusername function
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);