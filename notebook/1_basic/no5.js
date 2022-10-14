let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ').map(Number);

let min;

for(var i=0;i<input.length;i++){
    if(i==0){
        min=input[i];
    }
    else{
        if(input[i]<min){
            min=input[i];
        }
    }
}

console.log(min);