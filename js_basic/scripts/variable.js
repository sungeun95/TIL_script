/* variable(변하는).js */
/* 템플릿 문자열 활용 - 월,요일 출력 */
// new Date();
// getFullYear();
// getMonth();
// getDate();
/* 변수생성 시 기존 변수와 같은 위치에 작성하기 */
var test = new Date(); //컴퓨터 시간 불러오기, 객체는 변수로 활용 가능하다.
var ye = test.getFullYear(); //년
var mon = test.getMonth(); /* 컴퓨터는 기본적으로 0부터 인식하여(함수에 따라 1이라고 인식하는 속성, 함수가 있다. 대표 length) 5월을 4월로 인식 그래서 출력시 1을 더한 값을 사용한다. */
var day = test.getDate();
//console.log(`${ye}년 ${mon+1}월 ${day}일`); //2025sus 5월 14일
//객체의 개수를 체크할땐 보통 0부터 숫자를 인식하지만 특정 속성이나 함수는 1부터 인식하는 종류들도 있다. 대표적인 1부터 인식하는 속성은 문자열의 길이를 체크하는 length속성이다. 
//hello.length; 결과 -> 5
/* ===================================ES6 새로운 변수 let, const와 기본 변수 var */
var num1 = 10;
var num1 = 20;
// var는 중복선언이 가능하다. 하지만 실무에선 이미 생성한 변수명을 또 중복선언하는 문제를 내면 안되기 때문에 var은 이를 오류로 구분하지 못해 가능한 사용하지 않거나 주의해서 사용해야한다.
let num2 = 30;
//let num2 = 40;
//let 변수생성키워드는 이미 생성한 변수를 중복선언하지 못하도록 체크하기 때문에 개발자의 실수를 방지할 수 있다.
const num3 = 50;
//const num3; 중복선언불가
//num3 = 60; 값 변경 불가(처음 선언된 값을 끝까지 변하지 않고 유지해야한다!!)
//const num4; 상수는 생성과 대입이 반드시 동시에 진행되어야 한다!
const num4 = 60;// 올바른 경우
/* ===================================객체 연습 */
//1. 도형 정보 저장 (너비, 높이, 좌표, 모서리, 색상)
let rectagle = { //rectagle객체변수명은 콜스택 저장
    width:300, //{width~color}객체모든 속성은 메모리힙 저장
    height:200,
    x:0,
    y:100,
    border:0,
    color:'red',
}
console.log(rectagle.x, rectagle.y);
//2. 화원정보 저장(이름, 나이, 성별, 지역)
let user_info = {
    name:'최성은',
    age:31,
    gender:'여자',
    area: '인천 서구 검암동'
}
console.log(`제 이름은 ${user_info.name}이며 나이는${user_info.age}, 성별은 ${user_info.gender}입니다. ${user_info.area}에 살고 있습니다.`);
//3. 쇼핑몰 상품 저장(상품명, 가격, 재고수량, 색상)
let product = {
    food: '불고기국수',
    price: 10000,
    quantity: 1,
    evaluation: '많이 싱겁다.'
}
console.log(`${product.food}의 남은 판매수량은 ${product.quantity}개 입니다.`);
//4. 영화관 좌석 지정 (좌석명, 좌석위치, 좌석가격)
let movie_theater ={
    name: '일반',
    pst_line: '3열',
    pst_seat: '6석',
    price: 15000
}
console.log(`오늘 ${movie_theater.name}좌석 ${movie_theater.pst_line},${movie_theater.pst_seat}을 ${movie_theater.price}원으로 예약했다.`);
/* ===================================배열 연습 */
//배열 작성법 1 (값은 개수 제한 없음, 최소 2개 이상)
// ler(변경가능) 배열변수명 = [배열,배열,배열]; 
// const(변경불가) 배열변수명 = [배열,배열,배열];
const yoil = ['월','화','수','목','금','토','일']
console.log(yoil); //test
console.log(yoil[2]); //배열변수명[호출인덱스번호]
console.log(`오늘은 ${yoil[2]}요일 입니다.`); 
console.log(`내일은 ${yoil[2+1]}요일 입니다.`); 