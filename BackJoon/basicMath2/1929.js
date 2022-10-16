const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");

const [min,max] = input.map(Number);

function check(num){
    if(num==1){
        return false;
    }
    for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

for(let i=min;i<=max;i++){
    if(check(i)){
        console.log(i);
    }
}


