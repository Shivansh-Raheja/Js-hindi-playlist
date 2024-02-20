const myarr=[1,2,3,4,5,6]
const Heroes=["Batman","Superman","Wolverine"]

console.log(myarr)
console.log(Heroes)

myarr.push(7)//here array has functions just that as of a stack in cpp
console.log(myarr)

myarr.pop()
console.log(myarr)

myarr.unshift(8)
console.log(myarr)

myarr.shift()//acts as a shifting element 
console.log(myarr)

const newarr=myarr.join()//adds the elements in the form of a string
console.log(myarr)
console.log(newarr)

console.log(myarr.includes(7))
console.log(myarr.indexOf(5))

const narr1=[1,2,3,4,5]
console.log('A' ,narr1)
const narr2=narr1.slice(1,3)
console.log(narr2)
console.log('B',narr1)
const narr3=narr1.splice(0,2)
console.log('C' ,narr1)
console.log(narr3)