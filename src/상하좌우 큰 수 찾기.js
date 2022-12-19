function solution(arr1) {
  let answer = [[], [], [], [], []];
  let check = [[], [], [], [], []];

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      // 2개 비교 -- i=0,j=0 / i=0,j=4 / i=4,j=0 / i=4,j=4
      // 3개 비교 -- i=0,j=1,2,3 / i=1,2,3 j=0 / i=1,2,3 j=4 / i=4, j=1,2,3
      // 4개 비교 -- 0<i<4, 0<j<4
      if (i === 0 && j === 0) {
        if (
          arr1[i][j] > arr1[i][j + 1] && // 우
          arr1[i][j] > arr1[i + 1][j] // 하
        ) {
          arr1[i].splice(j, 1, "*");
        }
      }
      if (i === 0 && j === 4) {
        if (
          arr1[i][j] > arr1[i][j - 1] && // 좌
          arr1[i][j] > arr1[i + 1][j] // 하
        ) {
          arr1[i].splice(j, 1, "*");
        }
      }
      if (
        arr1[i][j] > arr1[i][j + 1] && // 우
        arr1[i][j] > arr1[i][j - 1] && // 좌
        arr1[i][j] > arr1[i - 1][j] && // 상
        arr1[i][j] > arr1[i + 1][j] // 하
      ) {
        arr1[i].splice(j, 1, "*");
      }
    }
  }

  console.log(arr1);
}

let arr1 = [
  [7, 4, 6, 5, 9],
  [6, 1, 3, 4, 5],
  [4, 8, 5, 6, 9],
  [1, 3, 0, 6, 4],
  [6, 4, 8, 1, 7],
];
solution(arr1);
