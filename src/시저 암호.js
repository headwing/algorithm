function solution(s, n) {
  var answer = "";
  let order = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  s = s.split("");

  for (i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      if (s[i] === s[i].toLowerCase()) {
        s[i] =
          order[
            order.indexOf(s[i]) + n > 25
              ? order.indexOf(s[i]) + n - 26
              : order.indexOf(s[i]) + n
          ];
      } else {
        s[i] =
          order[
            order.indexOf(s[i].toLowerCase()) + n > 25
              ? order.indexOf(s[i].toLowerCase()) + n - 26
              : order.indexOf(s[i].toLowerCase()) + n
          ].toUpperCase();
      }
    }
  }
  return s.join("");
}

let s = "a B z";
let n = 1;
console.log(solution(s, 1));
