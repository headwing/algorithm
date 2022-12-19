function solution(s) {
  var answer = [];

  var upper = [];
  var lower = [];

  s = s.split("");
  s.forEach((value) =>
    value === value.toUpperCase() ? upper.push(value) : lower.push(value)
  );
  upper.sort().reverse();
  lower.sort().reverse();

  answer = [...lower, ...upper].join("");
  return answer;
}

let s = "Zbcdefg";
console.log(solution(s));
