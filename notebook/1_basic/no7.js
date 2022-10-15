let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const day = parseInt(input[0]);
const car = input[1].split(" ").map(Number);

let count=0;
for(var i=0;i<car.length;i++){
    if(car[i]%10==day){
        count++;
    }
}

console.log(count);
