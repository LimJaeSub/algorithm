const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim();

let arr = input.split(" ");

console.log(arr===""?0:arr.length);