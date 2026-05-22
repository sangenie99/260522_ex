// 객체 구조 분해 할당
const obj = { name : "이상진", age : 28, job : "개발자",salary : 3000000};
const { name, age, job, salary } = obj;
console.log(
    `이름: ${name}, 
나이: ${age}, 
직업: ${job}, 
급여: ${salary}`);

function f() {
    return {
        name: "lee sangjin"
    }
}

const {name: personName } = obj // alias(별칭)
const { name: personName2} =f();
console.log(personName, personName2)

const { preference, pet = "고양이", ...rest} = obj ;
console.log(preference)
console.log(pet);
console.log(rest);
// 재할당, 얕은 복사, 깊은 복사

const obj2 = obj; // 재할당
obj["name"] = "세바스찬";
console.log(obj2)
const obj3 = {...obj};
const {...obj4} = obj;
obj["name"] = "좐";
console.log(obj3,obj4);




//배열 구조 분해 할당
const arr= ["samsung", "skhynix", "apple", "microsoft","NVIDIA"]
// for()
const [a1,a2,a3,a4,a5] = arr;
console.log(a1, a2, a3, a4, a5);
const [a6] = arr;
console.log(a6);
const [, , , , , a7] = arr; // ,로 생략이 가능? 가능함
console.log(a7)
let i =0
let j = 100;
console.log(i,j);
[j,i] = [i,j]; //이것만 알고있어도 많은 알고리즘 문제의 절차적 코드를 줄일 수 있다.
console.log(i,j);

const[b, ...c] = arr;
console.log(b,c);
const [d,e,h, ...g] = arr;

const arr2 = arr; // 재할당
const arr3 = [...arr]; // 다른 배열
arr[0] = {a:1};
console.log(arr === arr3);
arr[1] = 1000;
console.log(arr)
console.log(arr3);
arr[0].a = 1000;
console.log(arr);
console.log(arr3);