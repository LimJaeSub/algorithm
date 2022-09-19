const { count } = require('console');
const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim().split('\n').map(Number);

const numcount = input[0];
input.shift();
const numarr = input;
const countarraylength = Math.max(...numarr);

const countarray = Array(countarraylength).fill(0);

for(let i=0;i<numarr.length;i++){
    countarray[numarr[i]-1]++;
}

for(let i=0;i<)