let number=6;
let flag=0;
let middle=number/2;

if(number==0||number==1){
    console.log(`${number} is prime number`)
}else{
for(i=2;i<=middle;i++){
    if(number%i==0){
        console.log(`${number} is not a prime number`);
        flag=1;
        break;
    }
}
if(flag==0){
    console.log(`${number} is prime number`)
}
}