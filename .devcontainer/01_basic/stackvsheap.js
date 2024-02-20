let youtubename="shivansh"
let anothername=youtubename
console.log(anothername)
console.log(youtubename)
anothername="Scletus"
console.log("after changing the value of anothername")
console.log(anothername)// this is so because this uses primitive data type which provides the copy of a particular variable

let obo={
    numm:188,
    nameeee:"harsh"
}
let obu=obo

console.log("obo before changes", obo)
obu.numm=200
obu.nameeee="scletus"
console.log("\n")
console.log("obo after changes with reference", obo)