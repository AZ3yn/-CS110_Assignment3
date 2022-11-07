// Ex. 5
let num = 4;
let rem = [];
while(num >= 1){
    rem.push(num%2);
    num = Math.floor(num/2);   
}
let x = [];
for(i = rem.length - 1; i >= 0; i--){
    x.push(rem[i]);
}
console.log(x);