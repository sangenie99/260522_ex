// let, const (var)
// Today I learned는 내가 무엇을 더 공부하는 지가 더 궁금해져야한다.
// scope?

let a = 0;
console.log(a);
function myFun(){
    // return undefined가 숨어져있다.
    a++;
    let b =1;
    return b; // 값은 내보내는 것은 return만 가능하다
}

myFun();
console.log(a);
console.log(myFun());
const c = myFun();
console.log(c);

function myFun2(a) {
    return a * 2;
}
console.log(myFun2(100))
myFun2(a);
// 블록 외부에 있는 네임스페이스 -> 매개변수 -> 내부에서 선언

function myFun3(){
    const r = Math.random();
    switch(true){
        case r > 0.75: 
            return "대성공"
        case r > 0.5:
            return "소성공"
        case r > 0.25:
            return "중성공"
        default:
            return "실패"
    }
}

console.log(myFun3());

//     if(Math.random()>0.5) {
//     return [1,2,3]; // 더이상 출력만의 의미를 가지는 것은 아님
//     // 여기서 함수 로직 종료
//     // 특정 함수 블로의 break 역할 다만 평가되는 값을 알려주는..
//     }
//     // else 역할을 하게 된다.
//     return "승리"
//     // else도 안쓰고 switch도 안쓰고 함수화한다음에 if -> return

