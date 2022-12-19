function solution(new_id) {
  // 1단계
  new_id = new_id.toLowerCase();

  // 2단계
  let new_id_temp = new_id;
  var pattern1 = /[0-9]/; //숫자
  var pattern2 = /[a-z]/; //영어

  for (i = 0; i < new_id_temp.length; i++) {
    if (
      pattern1.test(new_id_temp[i]) |
      pattern2.test(new_id_temp[i]) |
      (new_id_temp[i] === "-") |
      (new_id_temp[i] === "_") |
      (new_id_temp[i] === ".")
    ) {
    } else {
      new_id = new_id.replace(new_id_temp[i], "");
    }
  }
  // new_id = new_id.replace(/[^\w-_.]/g, "");

  // 3단계
  while (new_id.indexOf("..") !== -1) {
    new_id = new_id.replace("..", ".");
  }
  // new_id = new_id.replace(/\.+/g, ".");

  // 4단계
  if (new_id[0] === ".") {
    new_id = new_id.slice(1);
  }
  if (new_id[new_id.length - 1] === ".") {
    new_id = new_id.slice(0, -1);
  }

  // 5단계, 6단계
  if (new_id.length === 0) {
    new_id = "a";
  } else if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);

    if (new_id[new_id.length - 1] === ".") {
      new_id = new_id.slice(0, -1);
    }
  }

  // 7단계
  while (new_id.length <= 2) {
    new_id += new_id[new_id.length - 1];
  }

  return new_id;
}

let new_id = "z-+.^.";
console.log(solution(new_id));
