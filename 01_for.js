

// 배열 순회

const arr = ["아침", "간식", "점심", "저녁", "야식"];
console.log(arr[0], arr[1], arr[2], arr[3], arr[4]);
for (let i = 0; i < arr.length; i++) {
    // 0부터 시작해서 길이 미만으로 조건식이 간다.
    // 1부터 시작하면 모든 조건이 '충족' -> 전체 길이 이하여야 모든 원소/요소를 찾을 수 있음
    // 인덱스 또한 0부터 시작하기 때문에 마지막 인덱스는 전체길이 -1
    if(arr[i]=== "간식"){
        continue;
    }
    if(arr[i]=== "저녁"){
        break;
    }
    console.log(arr[i]);
    // 인덱스 또한 0부터 시작하기 때문에 마지막 인덱스는 전체 길이의 -1, '미만'이 된다.
    
}

// 역방향
for(let i = arr.length-1; i>=0;i--){
    console.log(arr[i]);

}
//while문으로 구현한다면?
let w2 = arr.length-1;
while(w2 >=0){
    console.log(arr[w2]);
    w2--;
}

// 무한반복
// for(;;){ //for의 무한 반복
//     console.log("무한반복");
// }

// while(true) {
//     // while의 무한반복
// }


// 중첨 for문
// 중첩은 몇 번까지만? -> 2번까지만 하자
// big0 -> 0^2 / 0*log0
// 4자리 수의 구조를 만들기 위해서
// 배열을 하나 만들고 밖에서 for을 돌려야 한다.
// if, switch, while, for 모두 겹칠 수 있음.
// 블록스코프 -> 하위 {}에서는 상위의 변수/상수와 같은 범위를 가짐
for (let i =0; i<3;i++){
    for(let i=0;i<3;i++){
        console.log(`i=${i}`)
    }
}

//보통은 서로 다른 대상을 함
for (let i =0; i<3;i++){
    for(let j=0;j<3;j++){
        console.log(`i=${j}`)
    }
}

// 표 형태의 데이터를 탐색할 때 (행-열)
const matrix = [
    [1, "윌리엄", "바나나를 좋아함"],
    [2, "스티브", "사과를 좋아함"],
    [3, "이상진", "undefined 좋아함"]
]
for(let i=0; i<matrix.length;i++){
    console.log(matrix[i])
    for(let j = 0; j < matrix.length; j++){
        console.log(matrix[i][j])
    }
}

// 그리드 형태로 되어있는 탐색 문제..