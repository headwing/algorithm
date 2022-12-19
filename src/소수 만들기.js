function solution(nums) {
  var answer = 0;
  var temp = [];

  // 3가지를 뽑아 더하는 모든 경우를 전부 temp에 push!!!
  for (i = 0; i < nums.length; i++) {
    for (x = i + 1; x < nums.length; x++) {
      for (y = x + 1; y < nums.length; y++) {
        temp.push(nums[i] + nums[x] + nums[y]);
      }
    }
  }

  // push된 숫자들 중 소수가 아닌 것의 숫자 세기
  for (const i of temp) {
    for (x = 2; x < i; x++) {
      if (i % x === 0) {
        answer += 1;
        break;
      }
    }
  }

  // 전체 개수에서 소수가 아닌 것의 숫자를 빼면 소수인 것의 개수가 나온다.
  return temp.length - answer;
}
let nums = [1, 2, 7, 6, 4];
console.log(solution(nums));
