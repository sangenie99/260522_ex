//호이스팅
console.log(fun); //함수 선언 => 객체 취급
console.log(typeof fun); // function (일급객체)=> TIL하기
console.log(fun()); //
console.log(bar); // 왜? 일단 호이스팅됨(즉 선언부터 되고 할당은 x)
// console.log(foo); // ReferenceError: foo is not defined
foo = 100; //var foo = 100;
console.log(foo);
var bar = 200;
console.log(bar);

function fun(){
    return 0;
}


// const fun = () => return 0; // 함수 표현식으로 방지
//let, const를 써서 선언 시점을 고정하는 것 -> 호이스팅 방지
// 1) 재선언, 재할당 x
// 2) 호이스팅 방지 (func, var...)
function fun() {
    return "덮어 씌웠지롱"; // 선언부로 올라가고, 재선언도 가능하니까...
}

// 호이스팅 의도적 사용 (only function)
// C에서는 안되는 이유는?
/*
const option =makeOption(isLocal());
const data = fetchFromAPI(option);

function isLocal() {}
function makeOption() {}
function fetchFromAPI() {}
*/
// const, let , 함수표현식/ 화살표함수를 위주로 하면 호이스팅 겪을 일이 없다.