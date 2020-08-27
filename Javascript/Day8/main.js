function local() {
    let num = 1;
    console.log(num);
}
console.log(num)
for (let i = 0; i < 10; i++) {
    var sum = 0;
    sum += i
}
const greeting = {
    message : "hello",
    number : "five"
}
greeting.message = "say hello insead"
console.log(greeting)
// Variable
let firstName = "Harry"
let lastName = "Vu"
let fullName = `Xin chào, mình tên là  ${firstName} ${lastName}
Say Hello 
6 + 5 = ${6 + 5}
7 - 3 = ${7 - 3}`
console.log(fullName)
// Array
let arr = [20,30,40,50,60]
let a = arr[0]
let b = arr[1]
let [a1, b1,...rest] = arr
console.log(a1, b1, rest)
// Object
let user = {
    name: 'Nguyễn Văn A',
    age: 25,
    gmail: 'example@gmail.com'
}
let {name, age, gmail} = user
console.log(name)
console.log(age)
console.log(email)
// Function
function getUser() {
    return {name: 'Harry Vu', age: 13}
}
let {name, gmail} = getUser()
console.log(name)
console.log(gmail)
// Nested Object
let person = {
    info: {
        name: 'Đức',
        age: 13,
        job: 'Developer'
    }
}
let {info: {name, age, job} } = person;
console.log(name, age, job)
let sum = (a, b) => a + b

//Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
let shortenString = obj1 => {
    n = obj1.slice(0,8);
    return `${n}...`
}
shortenString('hello darkness')
//Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
let repeatString = obj => {
    var obj1 = obj + "-"
    var n = obj1.repeat(10)
    var m = n.split("")
    m.pop()
    var a = m.join("")
    console.log(a)
}

let repeatStr = obj => {
    var result = []
    for (var i = 0; i <= 10; i++) {
        result += `${obj}-`
    }
    return result.slice(0, result.length-1)
} 
repeatStr('a')

let multiply = (a=1,b=2) => a*b;
console.log(multiply()) // Expected output: 2
console.log(multiply(1)) // Expected output: 2

let numbers = [1,4,11,7,8,5,0]
console.log(Math.max(...numbers)) // Expected output: 11

function sum(...args) {
    let sum = 0;
    args.forEach((arg) => sum += arg)
    return sum;
}
console.log(sum(1)) //Expected output: 1
console.log(sum(1,2,3)) //Expected output: 6
console.log(sum(1,2,3,4,5)) //Expected output: 15

function f(arg1, ...rest, arg2) {
    //error
}