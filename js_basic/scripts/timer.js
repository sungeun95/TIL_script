function greeting(){
	return console.log('hello');
	}
setInterval(greeting,3000);
//타이머 함수 setlntervaI 일정시간반복
let num1 = 0;
function num1Func(){
    num1++;
    if(num1>4){num1=1};
    console.log(num1);
    //1234에서 1234 ....계속이어서
}
//setInterval(num1Func,1000);

let num2 = 0;
//0~5 반복 출력 타이머
function num2Func(){
    console.log(num2);
    num2++;
    if(num2>5){num2=0};
    //0~5 반복 출력 타이머 012345012345...
}
//setInterval(num2Func,1000);

let num3 = 6;
function num3Func(){
    console.log(num3);
    num3--;
    if(num3<0){num3=6};
}
setInterval(num3Func,1000)
//6~0 출력 타이며 65432106543210 ...