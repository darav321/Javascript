
const mySum = Symbol("key1")

const jsUser = {
    name : "varad",
    age : 20,
    email : "varad@gmail.com",
    isLoggedIn : false,
    [mySum] : "mykey1",
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(typeof mySum)

jsUser.email = "changed@fmail.com"
Object.freeze(jsUser)
jsUser.email = "bag"
console.log(jsUser)
