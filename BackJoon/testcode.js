const fs = require('fs');
const input = fs.readFileSync("BackJoon/test.txt").toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);


console.log(a>b?'>':a==b?'==':'<');