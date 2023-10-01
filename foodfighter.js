function solution(food) {
  let answer = "0";

  for (let i = food.length - 1; i > 0; i--) {
    if (food[i] % 2 !== 0) {
      food[i] -= 1;
    }
    let k = food[i] / 2;

    // i를 k개 만큼 0의 양옆으로 붙이기!
    if (k !== 0) {
      let temp = String(i);
      for (let j = 1; j < k; j++) {
        temp += String(i);
      }

      answer = temp + answer + temp;
    }
  }

  // console.log(answer);
  return answer;
}

solution([1, 3, 4, 6]);
