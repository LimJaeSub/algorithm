const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(
  input[0] > input[1]
    ? input[1] > input[2]
      ? input[2]
      : input[1]
    : input[0] > input[2]
    ? input[2]
    : input[0]
);
