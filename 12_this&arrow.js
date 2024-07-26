// this keyword

const userInfo = {
    name : "Varad",
    age : 20,

    welcomemsg : function() {
        console.log(`hi ${this.name} your age ${this.age}`)
        console.log(this) // returns context defined inside the object
    }
}

userInfo.welcomemsg()
console.log(this)  // returns empty object

// this keyword works only in context of object
function word() {
    let username = "varad"
    console.log(this)
    console.log(this.username) // return undefined
}
word()

// Arrow function 

const fun = () => {
    console.log(this) // will return empty object
    let username = "aniket"
    console.log(this.username)
}
fun()

// Arrow function short syntax

const add = (n1, n2) => (n1 + n2)
console.log(add(5,8))

// in aboove example of short syntax, function code is wrapped in () but if it is wrppaed  in {} then return keyword is important otherwise it will return undefined

