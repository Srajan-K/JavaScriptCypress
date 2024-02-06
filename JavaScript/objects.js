
let trainee ={
    username: "Nikhil",
    traineeGrade: "A",
    City: "Manglore",
    Age: 23,
    States :["Karnataka","Maharastra"]
     
}

console.log(trainee.username)
console.log(trainee['City'])

trainee.username='Srajan'
trainee['City'] = 'Udupi'
console.log(trainee.username)
console.log(trainee['City'])