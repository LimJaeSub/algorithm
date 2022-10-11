let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ').map(Number);

const [a,b,c] = input;

let max;
if(a>b){
    if(a>c){
        max=a;
    }
    max=c;
}
else{
    if(b>c){
        max=b;
    }
    max=c;
}

console.log(max);
if(max<a+b+c-max){
    console.log("YES");
}
else{
    console.log("NO");
}
