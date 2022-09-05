const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim().split('\n');
const [min,max] = input.map(Number);
const primearray = [];

const isPrime = (n)=>{
    if(n===1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false;
        }
    }

    return true;
}



for(let i=min;i<=max;i++){
    if(isPrime(i)){
        primearray.push(i);
    }
}

let sum = 0;
for(let i=0;i<primearray.length;i++){
    sum+=primearray[i];
}

console.log(primearray.length===0?-1:`${sum}\n${primearray[0]}`);
