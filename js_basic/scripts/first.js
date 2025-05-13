//================================== 1일차 25/5/12
// 변수
// var 변수명 = 대입값;
// var 변수선언키워드
// = 대입연산자(오른쪽에서 왼쪽으로 값 대입)
var num; //num 변수생성, 이미 생성 했으니 num의 값을 적용하기 전에 var(바)는 다시 작성하지 않는다.
num = 1; //1을 num에 대입한다(변수에 값 대입), 변수는 한가지 값만이 작성 가능하다.
var num2 = 2; //생성과 대입
// 콘솔 실행 함수 
//console.log(num2);
//console.log(num);
//객체.함수(실행하는값);
//콘솔창(객체)에 num2 변수값(실행값)을 로그로 출력(실행함수)하겠다.
//================================== 2일차 25/5/13
var bow1;
bow1 = '쌀';
//console.log(bow1); //쌀
bow1 = '콩';
//console.log(bow1); //콩
// 자바스크립트는 절차적 언어이기 때문에 CSS처럼 우선순위에 따라 최종결과값만 인식하는 것이 아닌 실행 함수의 작성 위치에 따라 다른 변수값을 인식 할 수 있다.
var a = 1;
var b = 5;
var c = 10;
//문자 b가 아닌 변수 b를 a에 대입한다(o) == 변수값을 대입한다
c = a; //a의 값을 c에게 대입한다.
console.log(a); // b의 값 받기 전 a의 기존 값 출력
a = b; 
console.log(b);
b = c;
console.log(c); // a값을 c로 대입받아 1로 출력
//=========================자료형 구분 자바스크립트에서 제공하는 내장 함수 typeof
//console.log(typeof a)
//console.log(typeof (b));
console.log('========데이터공부');
var d;
console.log(typeof d); //값이 할당 되지 않은 상태 undefined(오류찾기용도)
d = a;
/* console.log(d);//'d의 값은'+ d
console.log('d의 값 : '+d);//'d의 값은'+ d
console.log('a의 값 => '+a);
console.log('b의 값 =',b);
console.log('c의 값은',c); */
console.log('------------------');
console.log(1+1); //숫자+숫자 = 더하기 결과 2
console.log('1'+1); //문자+숫자 = 연결결과 11
console.log('------------------');
var box1 = 10;
var box2 = "hello";
var box3 = "javascript";
var box4;
console.log('box1='+box1,', box1은 '+typeof(box1)+'타입이다.'); //box1= 10, box1은 Number타입이다.
console.log(box2+' '+box3+'는 '+typeof(box2+box3)+'입니다!'); //hello javascript는 string입니다!
console.log(box4); //undefindd 정의안된상태(오류)
box4 = box2+' '+box3;
console.log(box4); //hello javascrip
//box4 = null; //값 제거
//box4 = 0; //숫자초기화(데이터 타입 유지)
box4 = ''; //문자초기화(데이터 타입 유지)
console.log(box4);
console.log(box4.length);//hello의 문자 갯수는?
//객체.속성;
//객체.함수();
console.log('------------------');
var num1 = 10;
var num2 = 20;
var num3 = 0;
var total; //결과 변수(위 데이터 변수들이 최종 대입될 대상)
console.log(num1, num2, num3); // 10 20 0
console.log(num1+ num2+ num3); // 30
tota1 = num1 + num2;
console.log(tota1); // 30 
console.log("she's gone");
console.log('------------------');
console.log('1+1은 '+(1+1)+'입니다.');//1+1은 2입니다. 탬플릿 적용 전
//일반 문자와 프로그래밍식을 쉽게 작성할 수 있게 하는 템플릿문자열 활용
console.log(`1+1은 ${1+1}입니다.`);//1+1은 2입니다. 탬플릿 적용 후
var num4 = 1;
var num5 = 2;
console.log(`변수 num4의 값은 ${num4}입니다.`);
console.log(`num4와 num5의 더한 결과값은 ${num4+num5}입니다.`);
console.log('------------------');
var subway=1550;
var coffee=2200;
var result=subway+coffee;
console.log(`오늘 총 지출액은 ${result}원 입니다.`);
console.log('------------------구구단');
var dan99 = 3;
//2x1=2
console.log(`${dan99}x1=${dan99*1}`);
console.log(`${dan99}x2=${dan99*2}`);
console.log(`${dan99}x3=${dan99*3}`);
console.log(`${dan99}x4=${dan99*4}`);
console.log(`${dan99}x5=${dan99*5}`);
console.log(`${dan99}x6=${dan99*6}`);
console.log(`${dan99}x7=${dan99*7}`);
console.log(`${dan99}x8=${dan99*8}`);
console.log(`${dan99}x9=${dan99*9}`);

