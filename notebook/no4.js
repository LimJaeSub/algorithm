let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ').map(Number);

const [num] = input;
let sum=0;
for(var i=1;i<=num;i++){
    sum=sum+i;
}

console.log(sum);