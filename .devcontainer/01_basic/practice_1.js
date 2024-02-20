const accountId=14445
let accountEmail="sr@gmail.com"
let accountPassword="2345456"
let accountState="UttarPradesh"

console.log("Data before Overriding")
console.table([accountId,accountEmail,accountPassword,accountState])

accountEmail="dr@gmail.com"
accountPassword="5756868"
accountState="MadhyaPradesh"

console.log("Data after Overriding")
console.table([accountId,accountEmail,accountPassword,accountState])

let accountCity;
console.log(accountCity)// this will return "undefined on the screen"
console.log("\n")

console.log("/*prefer not to use var since it defies block and functional scope*/")

console.log("\n") //here we have just showcased the use of a new line using "\n"

