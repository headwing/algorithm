function solution(d, budget) {
  var answer = 0;
  let temp = 0;
  d.sort(function (a, b) {
    return a - b;
  });

  for (i = 0; i < d.length; i++) {
    if (temp + d[i] <= budget) {
      temp += d[i];
      answer += 1;
    }
  }
  return answer;
}

let d = [1, 3, 2, 5, 4];
let budget = 9;
console.log(solution(d, budget));
