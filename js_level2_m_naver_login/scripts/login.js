//main .lang_group 기준
// 초기설정 : .lang_open 한국어~중국어 옵션 숨기기
// #lang_selsct 클릭 시 .lang_open 보이기
// .lang_open이 보이는 상태라면 #lang_selsct 클릭 시 .lang_open 숨기기
const langOpen = document.querySelector('.lang_open');
const langSelect = document.querySelector('#lang_select');
console.log(langSelect,langOpen);
langOpen.style.display = 'none'; //초기 숨기기
//참(보이기), 거짓(숨기기) 상태
let openif = false; //초기 거짓(숨겨진) 상태
langSelect.addEventListener('click',function(){
    if(openif==false){
        //langOpen 숨겨진 상태면 보이기
        langOpen.style.display = 'flex';
        openif = true; // 상태값 변경
    }else if(openif==true){
        //langOpen 보이는 상태면 숨기기
        langOpen.style.display = 'none';
        openif = false;
    }
});
// 네이버 로그인 에러 메세지 알고리즘
/* 
조건1) 아이디와 비밀번호를 모두 입력하고 않고 로그인 클릭 시
결과 = 아이디 또는 전화번호를 입력해주세요
조건2) 아이디를 입력하고 비밀번호를 입력하지 않고 로그인 클릭 시
결과 = 비밀번호를 입력해주세요
조건3) 아이디와 비밀번호를 모두 입력하고 로그인 클릭 시 정보가 틀렸을 시
결과 = 아이디, 비밀번호 입력정보가 잘못되었습니다. 다시 입력해주세요
조건4) 조건3 상황에서 로그인 실패가 3회 이상일때
결과 = 영수증 퀴즈와 '아이디(로그인 전화번호, 로그인 전용 아이디),비밀번호 또는 자동입력 방지 문자를 잘못입력했습니다. 입력하신 내용을 다시 확인해주세요.' 메세지 출력
*/
//네이버 회원정보 저장 DB
const naverUserDB = [{
    id: 'aaa',
    pw: 'a1234',
},{
    id: 'bbb',
    pw: 'b1234',
},]
console.log(naverUserDB);

//조건1) 아이디와 비밀번호를 모두 입력하고 않고 로그인 클릭 시
//결과 = 아이디 또는 전화번호를 입력해주세요
const userId = document.querySelector('input[name=user_id]');
const userPw = document.querySelector('input[name=user_pw]');
const loginBtn = document.querySelector('#login_btn');
const errorMsg = document.querySelector('.error_msg');
console.log(userId,userPw,loginBtn,errorMsg);
loginBtn.addEventListener('click',()=>{
    if(userId.value == '' && userPw.value == ''){
        //조건1)아이디와 비밀번호를 모두 입력안할 시(참) 실행결과
        errorMsg.textContent = '아이디 또는 전화번호를 입력해주세요';
    }else if(userPw.value == ''){ 
        //조건2) 조건1이 거짓이고 조건2의 비밀번호를 입력한했는가(참)
        errorMsg.textContent = '비밀번호를 입력해주세요';
    }else if(userId.value == ''){ 
        //조건3) 조건1,2가 모두 거짓일때 아이디를 입력안했는가(참)
        errorMsg.textContent = '아이디 또는 전화번호를 입력해주세요';
    }else if(userId.value == naverUserDB[0].id && userPw.value == naverUserDB[0].pw){
        //아이디와 비밀번호가 DB서버의 0인덱스값과 모두 일치할때, 네이버메인페이지로 이동
        window.location.href = 'https://naver.com'
    }else{
        //위 모든 조건이 거짓일때 
        errorMsg.textContent = '아이디, 비밀번호 입력정보가 잘못되었습니다. 다시 입력해주세요';
    }
    //삼항조건 활용 조건1
    //조건식 ? 조건식참결과 : 조건식거짓결과
    //조건결과대입변수 = 조건식 ? 조건식참결과 : 조건식거짓결과
    //errorMsg.textContent = userId.value == '' && userPw.value == '' ? '아이디 또는 전화번호를 입력해주세요' : ''
});