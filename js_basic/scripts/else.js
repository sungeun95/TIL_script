/*
참과 거직 조건문 문법
참 거직 중 하나만 실행된다!
if(조건식){
    조건식이 참일 때 실행문
}elae{
    조건식이 거짓일때 실행문 
}
*/
//아이디가 admin이면(참) '관리자님 어서오세요'
//admin이 아니라면(거짓) '관리자 페이지 접근불가' 출력
const userId = 'admi'; //인풋에 썼다 가정
if(userId == 'admin'){
    console.log('관리자님 어서오세요') // 참일때 출력
}else{
    console.log('관리자 페이지 접근불가') // 거짓일때 출력
}
// 사용자 로그인 유무를 판단 프로그램
// 로그인 유 isLogin 값 true 아니면 false
const isLogin = false;
if(isLogin){
    console.log('사용자가 로그인되어 있습니다.')
}else{
    console.log('사용자가 로그아웃 되어 있습니다.')
}
// 어떤 수를 2를 나눴을 때 나머지 값이 0과 같으면 짝수, 아니면 홀수
const userNum = Number(prompt('좋아하는 숫자를 입력하세요'));
console.log(userNum);
if(userNum % 2 == 0){
    console.log('당신이 좋아하는 숫자는 짝수 입니다.')
}else{
    console.log('당신이 좋아하는 숫자는 홀수 입니다.')

}