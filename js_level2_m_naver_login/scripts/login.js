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


