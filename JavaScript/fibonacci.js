var number=10;
var first=0;
var second=1;
var sum;
for (let index = 0; index < number; index++) {
    console.log(first);
    sum = first+second;
    first=second;
    second=sum;  
}

