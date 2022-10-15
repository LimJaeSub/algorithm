for (var i = 0; i < 5; i++) {
  console.log(i);
  for (var j = 0; j < 5; j++) {
    if (j == 2) {
      break;
    }
    console.log(j);
  }
  console.log("hello");
}
