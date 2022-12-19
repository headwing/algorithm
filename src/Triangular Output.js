function solution(star) {
  let output = "";
  for (i = 1; i <= star; i++) {
    for (j = 1; j <= star - i; j++) {
      output += " ";
    }
    for (j = 1; j <= (i - 1) * 2 + 1; j++) {
      output += "*";
    }
    output += "\n";
  }

  console.log(output);
}
let star = 9;
solution(star);
