
const alphas = [ 'James', 'Shade', 'Bola', "Ben"]

alpha.push("Dan") // TO add a new element to our array
alpha.pop() // To remove element from the end
alpha.unshift("Love") // To add element at the beginning
alpha.shift() // To remove elemnet from the beginning

console.log(alphas.length) // To check the lenght of array
console.log(alphas.indexOf("Bola")) // To check the index of Bola
console.log(alphas.includes("Bola")) // It return true if Bola if in the array 
const alphaToUpperCase  = alphas.map((alpha) => alpha.toLocaleUpperCase())




console.log(alphas)

const user = {
    name: 'Mark',
    age: "20",
    occupation: "Backend dev"
}

user.sex = "M" // This add a new property to our object
delete user.age // This delete age property in our object
const ageExist = "age" in user // To check if age exist in our object
const objectKey = Object.keys(user) // To know the key we use in declaring our properties
const objectValues = Object.values(user) // To know the value of object key

 
// console.log(user)
// console.log(user.name)
// console.log(user.age)
// console.log(ageExist)
// console.log(objectKey)
// console.log(objectValues)