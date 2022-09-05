const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim().split('\n');
const a = input[0].split(' ');
const drawcard = input[1].split(' ').reverse();
const [cardnum,maxnum] = a.map(Number);


// 1. 가장 큰수 빼기
// 2. 그다음 큰수를 뺀 차가 최소값보다 크면 다음 수 선택

for(let i=0;i<cardnum;i++){
    if(maxnum-drawcard[i]<0){
        drawcard.shift();
        continue;
    }
    console.log(drawcard[i]);
}

