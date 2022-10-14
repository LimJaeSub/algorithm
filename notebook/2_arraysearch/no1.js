let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const num = parseInt(input[0]);
const arr=input[1].split(" ").map(Number);

let newarr=[]

for(let i=0;i<num;i++){
    if(i===0){
        newarr.push(arr[i]);
    }
    if(arr[i-1]<arr[i]){
        newarr.push(arr[i]);
    }
}


console.log(newarr);
