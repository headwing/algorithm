function solution(strings, n) {
  var answer = [];
  var temp = [];

  strings.map((value) => temp.push(value[n]));
  temp.sort();
  strings.sort();

  for (const i of temp) {
    for (const x in strings) {
      if (i === strings[x][n]) {
        answer.push(strings[x]);
        strings.splice(x, 1);
        break;
      }
    }
  }

  return answer;
}

let strings = ["sun", "bed", "car"];
let n = 1;
let x = solution(strings, n);
console.log(x);
