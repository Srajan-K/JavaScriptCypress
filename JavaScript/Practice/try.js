function operators(){
    var x=5;
    var y=6;
    var z="5";
    console.log(x<y)
    console.log(y>x)
    console.log(z==x)
    console.log(z===x)
    console.log(x%2)
    console.log(x+z)

    a=(false)?"true value":"false value"
    console.log(a)
}

function conditions(){
    var flag=true
    if(flag){
        console.log(`Im from true`)
    }else{
        console.log(`Im from false`)
    }
}

function loops(){
    console.log(`Im from for loop`)
    for(var i=0;i<5;i++){
        if(i==3){
            continue
        }
        console.log(i)
    }

    console.log(`Im from while loop`)
    var k=0
    while(k<5){
        if(k==2){
            break
        }
        console.log(k)
        k++
    }

    console.log(`Im from do while loop`)
    l=0
    do{
        console.log(`this ${l}`)
        l++
    }while(l<3)
}

function switches(b){
    switch(b){
        case 1:
            return "This is 1"
            break;
        case 2:
            return "This is 2"
            break;
        case 3:
            return "This is 3"
            break;
        default:
            return "This is default"

    }
}

function strings(){
    var text1="Hello World"
    console.log(text1.toLowerCase())
    console.log(text1.toUpperCase())
    console.log(text1.length)
    console.log(text1.charAt(2))
    console.log(text1.slice(3,5))
    console.log(text1.indexOf('W'))
}

function arrays(){
    var array1=new Array(5);
    array1[0]="Mango"
    array1[1]="Apple"
    array1[2]="Orange"
    array1[3]="Grapes"
    array1[4]="Banana"

    return array1[2]
}

function dates(){
    var yesturday=new Date()
    yesturday.setFullYear(2023,1,5)
    return yesturday
}

function maths(){
    var pi_value=Math.PI
    console.log(pi_value)
    console.log(Math.floor(pi_value))
    console.log(Math.ceil(pi_value))
}

operators()
conditions()
loops()
var text=switches(2);
console.log(text)
strings()
console.log(arrays())
console.log(dates())
maths()