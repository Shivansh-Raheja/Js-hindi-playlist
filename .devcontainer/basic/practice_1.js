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

