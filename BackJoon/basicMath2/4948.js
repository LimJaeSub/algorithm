const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n").map(Number);


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

for(let i=0;i<input.length;i++){
    let count=0;
    const num = input[i];
    if(num==0){
        break;
    }
    for(let j=num+1;j<=num*2;j++){
        if(check(j)===true){
            count++;
        }
    }
    console.log(count);
}