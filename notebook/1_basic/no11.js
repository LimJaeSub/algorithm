let fs = require("fs");
let input = fs.readFileSync("input.txt").toString("utf-8");

const str = input.split("");
const lowerstr = input.toLowerCase().split("");
let count = 0;

for (var i = 0; i < str.length; i++) {
  if (str[i] !== lowerstr[i]) {
    count++;
  }
}

console.log(count);
