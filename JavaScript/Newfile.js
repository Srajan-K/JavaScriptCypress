// Different methods in Array
let names=["Arun","Srajan","Nikhil","Pratyush","Kumar","Chinmayee"]
let number=[[1,3],[1,2],[1,4]]
// for(var ch of names){
//     console.log(`Hi ${ch}`)
// }

names.forEach(ch=>{
    console.log(`Hi ${ch}`)
}) 

// for(let i=names.length-1;i>=0;i--){
//     console.log(`Hi ${names[i]}`)
// }
//Pop to remove last element
names.pop()
console.log(names)

//Push to add element at the end
names.push("Chinmayee")
console.log(names)

//Shift to remove first element
names.shift()
console.log(names)

//Unshift to add element at first
names.unshift("Arun")
console.log(names)

//Splice to add element to the given index
names.splice(2,0,"Arjun")
console.log(names)

//Slice to get some part of the array
let names1=names.slice(1,3)
console.log(names1)

//Delete to delete element
delete names1[1]
console.log(names1)

//Concat to mearge 2 array
console.log(names.concat(names1))

//CopyWithin
console.log(names.copyWithin(5,0,2))

//Flat
const newNumber=number.flat()
console.log(newNumber)