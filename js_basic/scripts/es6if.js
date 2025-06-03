//삼항조건연산자기본문법
//조건? 조건이참일때결과 : 조건이거짓일때결과;
let x = 5;
let y = x+10;
//삼항조건의 참 or 거짓 결과가 콘솔로그에 출력되는 형태
console.log(y==15 ? 'o' : 'x');

// 조건을 변수로 처라하고, 변수의 이름을 출력하는 단순한 형태
let total = x>10 ? 'o':'x';
console.log(total);

//연습2. 성인/미성년자 구분하기
// 18살 이상이면 '성인입니다' 아니면 '미성년자입니다'
/* const useAge = prompt('당신의 나이는?')
total = useAge >= 18 ? '성인입니다' : '미성년자입니다.';
console.log(total); */

//봄 500점, 여름 600점  
const game_score = [{
    name: '봄',
    score: 500,
},{
    name: '여름',
    score: 600,
}]
console.log(game_score);
//오늘의 1등은 oo이고 점수는 ooo입니다!
//조건 예시) 봄이가 여름이보다 점수가 큰가?
// 크면 봄이가 1등
// 작으면 여름이가 1등
total = game_score[0].score > game_score[1].score ?  game_score[0] : game_score[1] ;
console.log(`오늘의 1등은 ${total.name}이고 점수는 ${total.score}입니다!`);
//============================삼항조건 + 리뷰 js
const re = document.querySelector('textarea[name=re]');
const reBtn =document.querySelector('#re_btn');
console.log(re,reBtn);
reBtn.addEventListener('click',()=>{
    //콘솔 테스트 : 리뷰내용 출력
    console.log(re.value);
    //콘솔 테스트 : 리뷰글자 수 출력
    console.log(re.value.length);
    result = re.value.length >= 100 ? '등록완료' : '100자 이상 등록하세요'
    // 리뷰내용이 100자 이상인가?
    // 100자 이상이면 '등록완료'
    // 아니면 '100자 이상 등록하세요
    alert(result);
})
//============================삼항조건 + 소핑 수량과 가격 알고리즘
// 1개 가격 기준 12500원
// 쇼핑몰 상품 데이터베이스
const productDB = [{
    name:'떡닭도리탕',
    price: 12500,
    stock:10, //재고수량(최대 구매 개수)
},{
    name:'꼬막비빔장', //productDB[1].name
    price: 5800, //productDB[1].price
    stock:20, //productDB[1].stock
}]
console.log(productDB)
// DOM 변수 
const numInput = document.querySelector('input[name=num]');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const priceP = document.querySelector('.shopping .price');
let num = 0; //주문수량
let result = ''; //결과출력담을변수
console.log(numInput,minusBtn,plusBtn,priceP);
//초기 주문수량 표시
numInput.value = num;
// 증가 버튼 클릭 시 재고수량만큼 증가하고 재고수량 오버시 '최대구매수량입니다' 경고창 출력
plusBtn.addEventListener('click',()=>{
    //조건 : 현재 수량이 상품수량보다 크거나 같은가?
    //참이면 '최대구매수량입니다.'
    //거짓이면 '수량증가'
    result = num >= productDB[0].stock ? '최대구매수량입니다.' : ++num ;
    //최대구매수량 지정으로 재고 수량을 넘어갈시 증가하지 않는다.
    numOperatorFunc(0)
    //num*12500<<이 아니라 productDB의 배수를 이용해야한다.
    //(num * productDB[0].price)을 먼저 진행하고 .toLocaleString('ko-kr')=세번째 자리의 ,표시.을 적용하고 글자를 더해야한다.
})
// 감소 버튼 클릭 시 현재 수량이 1보다 작거나 같으면 '최소구매수량입니다' 아니면 수량 감소
minusBtn.addEventListener('click',function(){
    result = num <= 1 ? '최소구매수량입니다' : --num ;
    numOperatorFunc(0)
})
//증가, 감소 버튼 시 반복 실행하는 함수 (0,1로 매번 다른 인덱스만 매개변수 처리)
function numOperatorFunc(index){
    numInput.value = num;
    priceP.textContent = (num * productDB[index].price).toLocaleString('ko-kr') + '원';
    console.log(result);
}