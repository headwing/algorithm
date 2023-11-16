function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    // goal에 있는 것들을 하나씩 차례대로 꺼내기
    // cards1과 card2에 차례대로 맨 앞의 것을 대조 후 있다면 제거 후 다음 것 대조, 둘다 없다면 false 리턴

    for (const item of goal) {
        if (item === cards1[0]) cards1.shift()
        else if (item === cards2[0]) cards2.shift()
        else answer = 'No'
    }

    return answer;
}

console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]))