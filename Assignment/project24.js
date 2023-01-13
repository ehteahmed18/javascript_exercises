let car = 'subaru'

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
console.log("Is car == 'audi'? I predict False.")
console.log(car == 'audi')
console.log("\nIs car != 'subaru'? I predict False.")
console.log(car != 'subaru')
console.log("Is car != 'audi'? I predict True.")
console.log(car != 'audi')
console.log("\nIs car == 'SUBARU'.toLowerCase()? I predict True.")
console.log(car == 'SUBARU'.toLowerCase())
console.log("Is car != 'SUBaRU'.toLowerCase()? I predict False.")
console.log(car != 'SUBaRU'.toLowerCase())

let num = 10

console.log("\nIs num == 10? I predict True.")
console.log(num == 10)
console.log("Is num != 10? I predict False.")
console.log(num != 10)
console.log("Is num > 1? I predict True.")
console.log(num > 1)
console.log("Is num < 10? I predict False.")
console.log(num < 10)
console.log("Is num <= 10? I predict True.")
console.log(num <= 10)
console.log("Is num >= 11? I predict False.")
console.log(num >= 11)


console.log("\nIs num == 10 && car == 'subaru'? I predict True.")
console.log(num == 10 && car == 'subaru')
console.log("Is num != 10 && car == 'subaru'? I predict False.")
console.log(num != 10 && car == 'subaru')
console.log("Is num == 10 || car != 'subaru'? I predict True.")
console.log(num == 10 || car != 'subaru')
console.log("Is num != 10 || car != 'subaru'? I predict False.")
console.log(num != 10 || car != 'subaru')

//checking if value exists in an array

let arr = [1,2,3,4,5]
console.log("\nIs 1 in arr? I predict True.")
console.log(1 in arr)
console.log("Is 6 in arr? I predict True.")
console.log(6 in arr)