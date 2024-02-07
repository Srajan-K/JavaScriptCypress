const num=5
const string='5'
const bNum=6
let z=null
console.log(num==string)
console.log(num===string)
console.log(num<bNum)
console.log(bNum>num||num==bNum)
console.log(bNum>num&&num==bNum)
console.log(num+bNum)
console.log(num-bNum)
console.log(num*bNum)
console.log(num/bNum)
console.log(num%2)

//Nullish coalescing assignment operator
console.log(z??=num)

let text="Srajan "
text +="Kotian"
console.log(text)

console.log(num**bNum)

let x = 100 + 50 * 3;
console.log(x)

let y = -100;
y <<= 5;
console.log(y)

let s = -100;
s >>>= 5;
console.log(s)

let a = 10;
a &= 5;
console.log(a)

let b = 10;
b |= 5;
console.log(b)

let c = 10;
c ^= 5;
console.log(c)