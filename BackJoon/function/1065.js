const fs = require("fs");
const input = fs.readFileSync("function/input.txt").toString();
const num = parseInt(input);
//1~99 한수

//백의자리 : num/100
//십의자리 : num-(num/100*100)/10
//일의자리 : num-(백의자리*100+십의자리*10)

function checknum(num) {
  let answer1 = num;
  let answer2 = 99;
  if (num > 0 && num < 100) {
    return answer1;
  } else {
    for (let i = 110; i <= num; i++) {
      let hund = Math.floor(i / 100);
      let ten = Math.floor((i - hund * 100) / 10);
      let one = i - (hund * 100 + ten * 10);
      //console.log(i, hund, ten, one);
      if (ten - hund == one - ten) {
        answer2++;
      }
    }
    return answer2;
  }
}

console.log(checknum(num));
