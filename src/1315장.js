// const a = [];
// // a.sample = 10;
// console.log(typeof a);

// function b() {}
// // b.sample = 10;
// console.log(typeof b);

// const m = Number("야야");
// console.log(Number.isNaN(m));
// function foo() {
//     console.log("global")
// }
// function bar() {
//     function foo() {
//         console.log("local")
//     }
//     foo();
// }
// bar(); //local이 출력된다.

// var x = 1;
// if (true) {
//     // 여기서 x는 전역 변수에 해당하며, 중복 선언이 이뤄진다.
//     var x = 10;
// }
// console.log(x)

// var x = 1;
// function foo() {
//     var x = 10;
//     bar();
// }
// // bar 함수는 전역에서 정의된 함수이므로, 자신이 정의된 스코프인 전역 스코프를 기억했다가 bar함수가
// // 호출되면 호출된 곳이 어디인지 관계없이 자신이 기억하고 있는 전역 스코프를 상위 스코프로 사용한다.
// function bar() {
//     console.log(x);
// }
// foo();
// bar();


// // 이 시점에는 변수 호이스팅에 의해 이미 foo변수가 선언
// // 변수 foo는 undefined로 초기화
// console.log(foo); // undefined

// // 변수에 값을 할당
// foo = 123;
// console.log(foo); // 123

// // 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행
// var foo;

// let foo = 1;
// {
//     let foo = 2;
//     let bar = 3;
// }
// console.log(foo); // 1
// console.log(bar); // 참조 오류가 뜬다.

// console.log(foo); // undefined

// var foo;
// console.log(foo); // undefined

// foo = 1;
// console.log(foo); // 1

// // 런타임 이전에 선언 단계만 실행되고 변수 초기화는 되지 않았다.
// console.log(foo); // 초기화 이전이므로 참조 에러가 발생한다.

// let foo; // 변수 선언문에서 초기화 단계 실행
// console.log(foo); // undefined

// foo = 1;
// console.log(foo); // 1

// let foo = 1; // 전역 변수
// {
//     console.log(foo); // 참조 오류
//     let foo = 2 // 지역 변수
// }
// const foo = 1;
// cosnt bar; // 문법 에러 발생
