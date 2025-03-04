// Primitive

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 5758993094975456843309487654n


// Reference type (Non-primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj =  {
    name: "devraj",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);