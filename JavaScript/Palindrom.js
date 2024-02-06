var str='Madam'
var reverseStr=reverse(str);
if(str.toLocaleLowerCase()==reverseStr.toLocaleLowerCase()){
    console.log(`${str} is palindrom`)
}else{
    console.log(`${str} is not palindrom`)
}

function reverse(value){
    var temp='';
    for(i=0;i<value.length;i++){
        temp=value[i]+temp;
    }
    return temp
}