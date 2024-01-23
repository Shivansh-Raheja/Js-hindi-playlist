// revision of the types of datatypes in javaScript
//primitive are of 7 types-:
//string,number,boolean,symbol,BigInt,undefined,null

//how to use Symbol and BigInt
const val=Symbol("123")
const val1=Symbol("123")
console.log(val)
console.log(val1)
console.log(val===val1)

//non primitive are of three types-:
//arrays    objects   functions

const arr=["Venom", "Spiderman" ,"Batman"]
let ob={
    nameee:"shivansh",
    agee:22

}
let myfunction=function(){
    console.log("Hello world");
}

console.log(ob)
console.log(arr)
console.log(myfunction)