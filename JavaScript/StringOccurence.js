var str='Srajan'
var char='a'
var occurence=0
for(i=0;i<str.length;i++){
    if(str[i].toLocaleLowerCase()==char){
        occurence++
    }
}

console.log(`Charater "${char}" occurse ${occurence} times`)