let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const num = parseInt(input[0]);
const arr=input[1].split(" ").map(Number);

let count=0;
let max=0;

for(let i=0;i<num;i++){
    if(max<arr[i]){
        max=arr[i];
        count++;
    }
}

console.log(count);