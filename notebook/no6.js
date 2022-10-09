let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ').map(Number);


let min=Number.MAX_SAFE_INTEGER;
let sum=0;
for(var i=0;i<input.length;i++){
    if(input[i]%2!=0){
        sum=sum+input[i];
        if(min>input[i]){
            min=input[i]
        }
    }
}

console.log(`sum is ${sum} min is ${min}`);