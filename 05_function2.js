// 표현식

// 익명함수(anonymous function)
(function() {
    console.log("나는 존재하는 것일까?");
})(); // 익명함수는 어디에 들어가는 값이기 때문에 ()안에 있어야한다.

//함수 표현식
const f = function (fn){
    fn(); //함수
    console.log("함수 표현식");
}
f(function(){
    console.log("함수 표현식");
});

a(); // declaration before
//html? script -> 언제 해석될지 모름. html에 button, onclick 속성에 js 함수, html이 먼저 등장해서 위치를 잡은 다음 뒤에 script(var, function) / hoisting (감아올리기) -> let, const, function? -> let, const, 표현식 = 익명함수

function a() {
    console.log("호이호이호이스팅");
}

// 화살표 함수 (유사 lambda)
// 헤스켈, 리스프 - (스칼라...) - 클로저 - ocaml
(function () {})
// (입력) => (출력)
// (입력) => {과정 return 출력}

const af = () => 0;
af();
console.log(af());
const af2 =(a) => console.log(`실행결과:${a}`);
af2(1);
console.log(af2(1));
//매개 변수가 1개 잇을 때는 괄호 생략 가능
const af3 =(a) => {
    // 블록을 넣어서 최종적으로 과정을 거쳐 return
    a++;
    a *= 2;
    return a;
}
console.log(af3(100));