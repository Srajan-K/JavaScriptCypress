let places=["Beach","Mountains","River"]
let places2=["Park","Palace"]
let employe=[{name:"Srajan",empId:361},{name:"Shashank",empId:360}]
let number=[[1,3],[1,2],[1,4]]

console.log(places.length)
places.push("Falls")
console.log(places)
console.log(places.join("*"))
console.log(places.flat(2))
console.log(places.toString())
places.pop()
console.log(places.toString())
places.shift()
console.log(places)
places.unshift("Beach")
console.log(places)
console.log(places.concat(places2))
delete places2[0];
console.log(places2)
places2.copyWithin(0,1)
console.log(places2)
const newNumber=number.flat()
console.log(newNumber)
places.splice(1,0,"Palace","Stadium")
console.log(places)
console.log(places.slice(1,4))