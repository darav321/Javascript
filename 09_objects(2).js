const fbUser = {}

fbUser.id = "1ea"
fbUser.email = "varadkale00@gmail.com"
fbUser.name = "pratik"

console.log(fbUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)

// To merge

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = Object.assign({...obj1, ...obj2, ...obj4})
console.log(obj3)

const obj5 = {...obj1, ...obj2}
console.log(obj5)

// Array of Objects
const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

console.log(users[1].email)

console.log(fbUser)
console.log(Object.keys(fbUser))
console.log(Object.values(fbUser))

// destructuring 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor)
const {courseInstructor: ins} = course
console.log(ins) // will give courseInstructor 


