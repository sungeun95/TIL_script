// 회원가입 버튼 클릭 시 join_msg에 '가입축하합니다' 메세지 출력되고
const joinBtn = document.querySelector('#join');
const joinMsg = document.querySelector('.join_msg');
console.log(joinBtn,joinMsg);
joinMsg.classList.add('hide'); //초기상태 (숨기기)

joinBtn.addEventListener('click',()=>{
    joinMsg.classList.remove('hide');
    //필요할때만 보이게하기
    joinMsg.textContent = '가입축하합니다';
    // (메세지출력 후)3초 후 메세지 자동 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide');
    },3000)
})

/* ============================================= */

const payBtn = document.querySelector('#pay');
const payResetBtn = document.querySelector('#pay_reset');
const payMsg = document.querySelector('.pay_msg');
let payMsgOut;
console.log(payBtn,payMsg);
payMsg.classList.add('hide');//기초값 숨기기
payResetBtn.classList.add('hide');//기초값 숨기기(결제취소)
//DOM 선택자 변수 만들기
payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide');//필요할때 보이게하기
    payResetBtn.classList.remove('hide');//결제취소버튼
    
    payMsg.textContent='결제 완료되었습니다. 5초 후 광고사이트로 이동합니다.'; // 메세지 출력
    //console.log("결제 완료되었습니다.");
    payMsgOut = setTimeout(()=>{
        window.location.href = './timer3.html';//광고
        //5초 뒤 timer3.html로 이동하기
    },5000);

    payResetBtn.addEventListener('click',()=>{
        clearTimeout(payMsgOut);
        console.log('setTimeout 이동삭제완료')
        payResetBtn.classList.add('hide');
        payMsg.classList.add('hide')
    })
})