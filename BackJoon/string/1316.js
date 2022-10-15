const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

input = input.replace(/(\r\n|\n|\r)/gm, ",");

const num = parseInt(input[0]);
const str = input.split(",").slice(1);

let count = 0;

for (let i = 0; i < num; i++) {
  str[i] = str[i].split("");
}

for (let i = 0; i < num; i++) {
  let istrue = true;
  for (let j = 0; j < str[i].length; j++) {
    if (str[i].indexOf(str[i][j]) !== j) {
      console.log(str[i][j]);
      if (str[i][j] !== str[i][j - 1]) {
        istrue = false;
        break;
      }
    }
  }
  if (istrue === true) {
    count++;
  }
}

console.log(count);
