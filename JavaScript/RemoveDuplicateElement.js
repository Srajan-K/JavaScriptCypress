let names=["Arun","Srajan","Nikhil","Pratyush","Srajan","Nikhil","Kumar","Chinmayee"]
let names1=new Array()
//names1.push(names[0])
for(var i=0;i<names.length;i++){
    if(!names1.includes(names[i])){
        names1.push(names[i])
    }
}
console.log(names1)