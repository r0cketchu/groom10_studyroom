for (let i= 0; i< 10; i++) {
    if (i===3) {
        console.log('It is 3');
        continue;
    }

    if (i===5) {
        console.log ('5 stop the loof');
        break;
    }

    console.log('Number' + i);
}

//여기는 for/in 문
const user = {
    name: 'Han',
    province: '경기도',
    city: '성남시'
}

for(let x in user) {
    console.log (`${x}: ${user[x]}`);
}

//while문, 지정된 조건이 true 인 동안 코드 블록을 반복

let i =0;
while(i<10) {
    console.log ('Number'+i);
    i++;
}

//do/while루프는 while 루프의 변형. 이 루프는 조건이 true인지 검사하기 전에, 코드 블록을 한 번 실행, 그러고 나서 조건이 true인 동안 루프를 반복

let i =0;
do {
    console.log ('Number' + i);
    i++;
}

while (i<10);
