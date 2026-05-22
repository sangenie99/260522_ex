// 매개변수, 모수 (parameter) <- 값 : 인자, 인수 (arguments)

function f1(a,b,c) {
    console.log(a*2,b*2,c*2);
}

/* f1(); // 아무것도 안 넣어도 작동을한다.
f1(1,2); //일부만 넣어도 작동을 한다. (앞에서 부터 ..)
f1(1,2,3,4); //넘치게 넣어도 작곧을 한다.(무시할 뿐이다.)
f1(1,,3); //일부만 넣어으면 작동을 하지 않는다. (두번째 매개변수가 없음) */

function f2(a=120,b=150) {
    return a*b;
}

console.log(f2()); // 120*150
console.log(f2(100)); // 100 * 150

function f3() {
    console.log(arguments)
}

f3();
f3(1,2,3,4,5);

function f4(a,...b) {
    console.log("a",a);
    console.log("b",b);
}

f4(1);
f4(1,2);
f4(1,2,3,4,5,6)
// console.log(...data:any[]): void


// 앞으로는 Data와 관련있는 것을 할 때 사용할 것이다.
function f5(props){ //DTO, VO -> TS : Interface가 다르다
    if(props.a){
    console.log("props.a",props.a);
    return
    }
    console.log("props.b",props.b || "없음");
    console.log("props.c",props.c);
    console.log("props.d",props.d);
    console.log("props.e",props.e);
    console.log("props.f",props.f);
}
// f5() // {} /undefined -> x
f5({a:10});