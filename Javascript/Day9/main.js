//Export
const name="Anh Duc"

const sum = (a,b) => a + b

export {name, sum}

// Delay
function one() {
    console.log(1)
} 
function two() {
    console.log(2)
}
one()
two()
//Expected output: 
//1
//2

function one() {
    setTimeout(function(){console.log(1), 500})
}
function two() {
    console.log(2)
}
one()
two() 
//Expected output:
//2
//1

class User {
    constructor(name, email, age) {
        this.name = name
        this.email = email
        this.age = age
    }

    sleep() {
        console.log(`${this.name} is sleeping`)
    }

    email() {
        console.log(`${this.email} is his email`)
    }
}

let user = new User("Nguyễn văn A", 25, "example@gmail.com")
user.sleep()