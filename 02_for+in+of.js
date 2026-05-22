// for in
// 적당한 음식재료 배열을 만들어주세요
const arr = ["감자", "양파", "돼지고기", "닭고기", "오이고추", "대파"];
for (const key in arr) {  // i ++, i-- => 증감식, 변화식을 유지하기 위해서 블록 내에서 반속
    //let을 써도 상관 없는데 const를 많이 쓴다
    console.log(key, arr[key]);
    // 호출될 떄마다 새로 이 변수를 초기화해서 쓰기 때문에
}
// for in에 맞는 적절한 obj 예시를 주세요
const obj = {
    name: "이수빈",
    job: "개발자",
    age: 20,
    salary: 3000_000, //js -> 숫자 콤마(만, 천)
    
}
for(const key in obj){ //key -> 선언되어 들어간 순서 (정렬 보정이 아님)
    console.log(key, obj[key]);
}

arr[1.5] = "오이";
arr[2.478139] = "파슬리토마토"
for (const key in arr) {
    console.log(key, arr[key])
}

// 외부에서 객체형 데이터 -> key가 뭐가 있는지 모름(키가 몇천개 있음) -> 내가 원하는 키를 찾거나 특정한 데이터를 보기 위해서 사용

// 일반적인 JS 객체는 그대로 for-of문에 들어갈 수 없다. 
// 이때는 value(key)나 array.from()을 이용해서 배열로 변환 후 사용한다. 

// for in -key
// for of -value (key에 대응되는 obj[key] -> value)
for (const v of arr) {
    console.log(v); //순차적으로 원소를 불러오기 때문에 정수형으로 제공되지 않은 인덱스를 가지는 원소값 같은 것 전부 다 생략
}

for (const v of Object.keys(obj)){
    console.log(v);
}

