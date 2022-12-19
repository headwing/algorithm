function solution(arr1) {
  let answer = "";
  let count = 0;

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] === 0) count += 1;
  }

  if (count === 0) answer = "모";
  else if (count === 1) answer = "도";
  else if (count === 2) answer = "개";
  else if (count === 3) answer = "걸";
  else if (count === 4) answer = "윷";

  return answer;
}
let arr1 = [0, 1, 0, 0];
console.log(solution(arr1));
