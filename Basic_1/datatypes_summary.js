// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

// const bigNumber = 1234567890n


// refrence/non primitive
// Array, Objects, functions

const heros = ["Shaktiman","Naagraj","Doga"]

let myobj = {
    name : "Ambuj",
    agr : 22,
}

const myFunction = function (){
    console.log("Hello World");
}

console.log(typeof heros);


/*
Undefined => undefined
Null => object 
Boolean => boolean 
Number => number 
String => string
Object (native and does not implement [[Call]]) => object 
Object (native or host and does implement [[Call]]) => function
*/


// +++++++++++++++++++++++++++++++++++++++++++
// in primitive type we use stack : isme hame variable ki ek copy milti hai or ham us par operations perform karte hai.
// in non primitive type we use heap : isme hame original value ka reference milta hai.

// Primitive (Stack)
let myYoutubename = "insane_hakai"

let anotherName = myYoutubename
anotherName = "A_KAKA"

console.log(anotherName)
console.log(myYoutubename)

// Non Premitive (Heap)

let userOne = {
    email : "ambujks2002@gmail.com",
    upi : "ambuj9999932324@ybl"
}

let userTwo = userOne

userTwo.email = "ambuj248632@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)