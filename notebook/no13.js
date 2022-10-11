let fs = require("fs");
let input = fs.readFileSync("input.txt").toString("utf-8");

const upperstr = input.toUpperCase().split("");
const str = input.split("");

for (var i = 0; i < str.length; i++) {
  str[i] === upperstr[i]
    ? /*대문자일때*/ str[i].toLowerCase()
    : /*소문자일때*/ str[i].toUpperCase();
}

console.log(str.join(""));
