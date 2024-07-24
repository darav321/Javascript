// string interpolation
const name = "varad"
const age = 20
console.log(`My name is ${name} and my age is ${age}`)

// the above string variable will not have functions 
// to include the functions we will use following syntax

const myName = new String("Varad")

// all methods can be applied on the above string

console.log(myName.toUpperCase())
console.log(myName) // will not change the original variable as the variable is created in stack memory

const newString = "   varad    "
console.log(newString)
console.log(newString.trim())