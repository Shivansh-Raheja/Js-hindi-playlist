const arr1=["Ironman","Thor","hulk"]
const barr1=["Flash","Batman"]

//arr1.push(barr1)//never use this since it makes an array of array
//console.log(arr1)

//arr1.concat(barr1)
//it also gives the same output
//console.log(arr1)

//const new_heroes=arr1.concat(barr1)
//console.log(new_heroes)

const all_heroes=[...arr1,...barr1]
console.log(all_heroes)

const newarr=[1,2,3,4,5,[4,5,6],6,7,[4,5,8,9]]
console.log(newarr.flat())//to represent all items in a single array

console.log(Array.isArray("shivansh"))
console.log(Array.from("Shivansh"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
