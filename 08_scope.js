// var : 함수 스코프 (함수로 만들어진 블록만이 격리)
// let, const : 블록 스코프 ( {} : 함수, 조건문, 반복문, if, switch, 괄호만 있어도)
//너무 밖에 있어서 누구나 접근할 수 있으면 : 전역변수 (global)
let v3 ="I'm out v3"
{
    // let, const - narrative scope blocks from outer scope : local variable
    // var - not blocks from outer scope : global variable
    console.log("나는 블록이라고 해!")
    // 블록은 원칙적으로 격리되어야한다.
    var v1 = "I'm var";
    let v2 = "I'm let";
}

console.log(v1);
// console.log(v2); 
console.log(v3);


// 블록은 블록 밖에 안에서 선언된 결과물을 전달할 수 없다.
// 다만, 이미 바깥에 있는 식별자/네임스페이스/변수명/함수명에 대입하거나 해서 영향을 미칠 순 있다.
// 함수 -> return 값


for (let i = 0; i < 2; i++){
    console.log(i)
}

// console.log(i);

function f1() {
    var vv1 ="나는 당근";
    let l = 1;
    const c = 1;
}

f1();
// console.log(l)
// console.log(c)