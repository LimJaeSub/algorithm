const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();

const num = parseInt(input);

let min = Number.MAX_SAFE_INTEGER;
let count;

const division3 = Math.floor(num / 3);

for (let i = division3; i >= 0; i--) {
  let temp = num - i * 3;
  if (temp >= 5) {
    if (temp % 5 == 0) {
      //5로 떨어짐
      count = i + temp / 5; //딱 떨어질때 총 주머니 갯수
    }
  } else if (temp == 0) {
    count = i;
  }
  if (min > count) {
    min = count;
  }
}

if (min == Number.MAX_SAFE_INTEGER) {
  console.log(-1);
} else {
  console.log(min);
}
