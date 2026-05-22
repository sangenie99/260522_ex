// 렉시컬 스코프
const v = "global"

// 정처기 실기 -> 자바 -> 형 변환 했을 때 

function f() {
    //lexical : 어휘의, 어휘적 -> 작성된 시점에 결정
    // 스코프가 정의된 다음 유지된다 ->
    console.log(v) // function이 선언된 시점의 스코프를 기억함 -> global 
}
f();

function f2() {
    const v = "local"
    f();
}

f2();

function f3() {
   let c =0;
   return function (){
    return ++c;
   }
}
f3(); // function() {}
f3()(); // *** 실행한다는 의미
const counter = f3();
console.log(counter()); //1
console.log(counter()); //2
// 자바스크립트는 접근제어자가 없다. - 모듈에 있는 값, 함수등을 격리할 수 있음.
// 다 접근 가능하다 -> only 클로저

// -> 버튼 구현할 때 