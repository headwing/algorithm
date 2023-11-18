function solution(players, callings) {
    let answer = [...players];

    // callings를 하나씩 꺼내고, 그것과 일치하는 players를 찾기
    // 찾은 후 순서를 바꾸고, 바꾼 것을 업데이트, 업데이트를 한 값을 기반으로 다시 반복

    for (const calling of callings) {
        for (const i in answer) {
            if (calling === answer[i]) {
                const item = answer.splice(i, 1)
                answer.splice(i - 1, 0, item[0])
            }
        }
    }

    console.log(answer)
    return answer;
}

// 아래와 같이 중복함수를 최소화하고 forEach를 활용하여 인덱스 값을 저장하여 사용하자
function solution2(players, callings) {
    let idx;
    let name1;
    let name2;
    const idxList = {}

    players.forEach((name, index) => idxList[name] = index)

    for (let call of callings) {
        idx = idxList[call]
        name1 = players[idx]
        name2 = players[idx - 1]
        idxList[call] -= 1
        idxList[name2] += 1
        players[idx] = name2
        players[idx - 1] = name1
    }

    return players;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])