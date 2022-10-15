const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim().split('\n');
const a = input[0].split(' ');
const drawcard = input[1].split(' ').reverse().map(Number);
const [cardnum,maxnum] = a.map(Number);

let max = 0;


for(let i=0;i<cardnum;i++){
    for(let j=0;j<cardnum;j++){
        for(let k=0;k<cardnum;k++){

            if(i==j || i==k || j==k){
                continue;
            }

            const sum=drawcard[i]+drawcard[j]+drawcard[k];
            if(sum<=maxnum && sum>=max){
                max=sum;
            }

            if(max===maxnum){
                break;
            }
        }
    }
}

console.log(max);

