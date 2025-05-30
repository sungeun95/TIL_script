//11. 상품 옵션 선택 시 색상 선택 후(클릭(x) 변경(o)) 사이즈 선택 기능, 색상 미선택시 사이즈 선택 불가
//색생, 사이즈 select태그 변수 선언
const colorSelect = document.querySelector('select[name=color]');
const sizeSelect = document.querySelector('select[name=size]');
const orderColor = document.querySelector('.order_select .list .color');
const orderSize = document.querySelector('.order_select .list .size');
console.log(colorSelect, sizeSelect, orderColor,orderSize);
sizeSelect.disabled = this; //1. 사이즈 비활성화 초기값 설정
//색상 select를 변경했을 때 이벤트 생성
/* colorSelect.addEventListener('change',changeFunc);
function changeFunc(){ // 색상이 변경되었을 때 호출하는 함수
    return sizeSelect.disabled = false;
    //색상이 변경됬을때 사이즈 활성화 
} */
console.log('=================12번 product.js===================')
// 12. 색상 -> 사이즈 선택 시 선택한 정보가 아래 새로운 요소에 수량, 가격과 함께 출력
// 12-1. 위 (12)번 진행 전 새로운 요소 (.order_select) 숨기기
const orferSelect = document.querySelector('.order_select');
console.log(orferSelect);
orferSelect.style.display = 'none'; 
// 12-2. 위 (12)번 색상 -> 사이즈 선택 시 새로운 요소 (.order_select) 보이기
// 색상 -> 사이즈 선택 시 이벤트와 함수 생성
colorSelect.addEventListener('change',orderFunc); 
sizeSelect.addEventListener('change',orderFunc);
// 사이즈를 선택했을때 함수가 적용 될 수 있게, 사이즈에도 같은 함수를 적용한다.
function orderFunc(){
    //console.log(0) //정상확인
    //console.log(colorSelect.value); // 선택한 색상 값 확인 
    //console.log(sizeSelect.value); // 선택한 사이즈 값 확인
    sizeSelect.disabled = false; //사이즈 활성화
    //특정한 상황에서 아래 orferSelect 출력되고 싶다면? 상황을 조건문으로 작성한다!
    //orferSelect 출력 조건 -> color의 value 값이 존재하는 option 선택 후 size의 value값이 존재하는 option을 추가로 선택했을 경우
    /* orferSelect.style.display = 'block'; */ 
    // 조건문 연습 : if(조건식){조건식이 참일 경우 실행되는 명령}
    //if(true/* !!!! */){console.log('조건 실행 테스트')}
    console.log(Boolean(colorSelect.value)) 
    //참 거짓 출력 확인. (컬러를 선택시 참, 색상은 빈 문자열이라 거짓. )
    if(sizeSelect.value && colorSelect.value){ //만약 사용자가 선택한 색상 값이 참이면 실행해라.
        // 사용자가 선택한 colot, size의 값(value)이 모두 참일때 조건 실행 (value="" 빈문자열이면 거짓)
        orferSelect.style.display = 'block';
        //.order_select의 color 안에 선택한 colorSelect 값 대입하기
        orderColor.textContent = colorSelect.value;
        //.order_select의 size 안에 선택한 colorSelect 값 대입하기
        orderSize.textContent = sizeSelect.value;
    }
}
// 13. 수량 조정 시 1~9999개까지 선택 가능 기능
// 13-1. `-`버튼 클릭시 수량값이 1보다 작으면 1~9999개까지 선택가능합니다. 메세지 출력
// 13-2. `+`버튼 클릭시 수량값이 9999보다 크면 1~9999개까지 선택가능합니다. 메세지 출력
// 13-3. `+`,`-` 버튼 클릭 시 수량이 범위값 안에서 1씩 감소 또는 증가.
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const orderNum = document.querySelector('input[name=user_num]');
const toralPrice = document.querySelector('.order_select .price em');
let num = 1 ;//초기 수량
let prlce = 39900; //초기 가격
let total = 0; //수량에 따라 가격 계산하는 최종 변수 
console.log(minusBtn, plusBtn,orderNum ,toralPrice);

// 초기 설정
orderNum.value = num;
// 증가 + 버튼 클릭 시 수량이 1씩 증가되서 orderNum에 출력
plusBtn.addEventListener('click',()=>{ // 화살표 함수
    num++;
    if(num >= 1 && num <= 9999){ // 9999보다 큰 경우 에러메세지가 확인되는데, 다시 1로 넘어가면 안되니
    total = num*prlce; 
    orderNum.value = num;
    toralPrice.textContent = total.toLocaleString('ko-kr');
    // 계산을 완전히 완료하고 숫자를 글자로 바꿔줄때 사용하는 함수 toLocaleString
    // 나라마다 표시하는 문장이 다르기에 나라를 설정해 줘야한다.
    }
    // 증가 수량이 9999보다 큰 경우 경고 메세지 출력 '1~9999개 까지 선택 가능합니다.'
    if(num > 9999){alert('1~9999개 까지 선택 가능합니다.')}
})
// 감소 - 버튼 클릭 시 수량이 1씩 감소되서 orderNum에 출력
minusBtn.addEventListener('click',()=>{ // 화살표 함수
    num--;
    if(num >= 1){ // 1보다 작은 경우 에러메세지가 확인되는데, 그럼 0이 나오면 안되니 새로은 조건문으로 처리 
    total = num*prlce;
    orderNum.value = num;
    toralPrice.textContent = total.toLocaleString('ko-kr');
    }
    // 감소 수량이 1보다 작은 경우 경고 메세지 출력 '1~9999개 까지 선택 가능합니다.'
    if(num < 1){alert('1~9999개 까지 선택 가능합니다.')}
})
//15. 위 (12)번에서 나온 박스의 x 클릭 시 주문 정보 모두 삭제
const closeBtn = document.querySelector('.order_select .close');
console.log(closeBtn);
closeBtn.addEventListener('click',function(){
    orferSelect.style.display = 'none';
});
/* ===================================================================== */
const cartBtn = document.querySelector('#cart_btn');
const buyBtn = document.querySelector('#buy_btn');
console.log(cartBtn,buyBtn )
// 장바구니 클릭 시 '장바구니 담겼습니다.' 메세지 출력 alert()
/* cartBtn.addEventListener('click',function(){
    alert('장바구니 담겼습니다.');
}) */
cartBtn.addEventListener('click',()=>{
    return alert('장바구니 담겼습니다.');
})
// 바로구매 클릭 시 '로그인이 필요합니다. 메세지 출력
/* buyBtn.addEventListener('click',function(){
    alert('로그인이 필요합니다.');
}) */
/* buyBtn.addEventListener('click',()=>{
    return  alert('로그인이 필요합니다.');
}) */
buyBtn.addEventListener('click',buyFunc)
function buyFunc(){
    return  alert('로그인이 필요합니다.');
}