function solution(month, day) {
  let result = "";

  let date = new Date(`2022-${month}-${day}`);
  date.setDate(date.getDate() + 98);

  let getMonth = date.getMonth() + 1;
  let getDate = date.getDate();

  result = `${getMonth}월 ${getDate}일`;

  return result;
}

console.log(solution(1, 18));
