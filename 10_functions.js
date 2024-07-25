function printnums(...nums) {
    return nums
}

console.log(printnums(2,3,4,5)) // return in array form 

// object handling in function

const object = {
    name : "varad",
    age : 21
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.name} and age is ${anyObject.age}`)
}

handleObject(object)

const myArray = [2,3,4,5,6,7]
function arraymethod(getArray){
    return getArray[3]
}

console.log(arraymethod(myArray))