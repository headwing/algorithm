function solution(left, right) {
  var answer = 0;

  for (i = left; i <= right; i++) {
    let count = 0;
    for (x = 1; x <= i; x++) {
      if (i % x === 0) count = count + 1;
    }
    answer += count % 2 === 0 ? i : -i;
  }
  return answer;
}

let left = 13;
let right = 17;
console.log(solution(left, right));
