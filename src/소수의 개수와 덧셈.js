function solution(s) {
  let answer = [];

  let temp = s.split(" ");
  let min = [];

  for (const n of temp) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        min.push(n);
        break;
      }
    }
  }

  for (const m of min) {
    temp.splice(temp.indexOf(m), 1);
  }
  answer.push(Math.min(...min), Math.max(...temp));
  return answer.join(" ");
}

let s = "97 75 88 99 95 92 73";
console.log(solution(s));
