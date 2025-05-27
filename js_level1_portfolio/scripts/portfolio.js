//프로젝트 팝업 알고리즘
//1. 팝업 숨기기 (.popup_bg) display:none;
//2. 썸네일 이미지(a) 클릭 시 해당 이미지 팝업 보이기 (.popup_bg)
//3. 팝업 실행 기준 배경(.popup_bg)클릭시 팝업 숨기기 (.popup_bg)
//프로젝트 팝업 실행 시 클릭한 대상의 이미지가 출력되는 알고리즘
//1. 클릭한 대상의 이미지 경로 확인
//2. 위 경로를 팝업 이미지의 경로에 대입

// 알고리즈 기준 반복해야하는 데이터를 변수로 생성하기
const popupBg = document.querySelector('.popup_bg');
const thumbNailA = document.querySelectorAll('.design a');
console.log(popupBg,thumbNailA);
//1. 팝업 숨기기
popupBg.style.display = 'none'; //CSS를 자바스크립트 문법으로 작성
//변수로 만든 DOM요소가 여러개일 경우 이벤트를 위해 접근할때는 인덱스를 사용해서 하나씩 개별 접근해야한다.
//2 썸네일 이미지 클릭 시 해당 이미지 팝업 생성
thumbNailA[0].addEventListener('click', function(){
    console.log(0);//작동테스트
    console.log(this);//이벤트객체 자동인식하는지 확인
    console.log(this.children);//thumbNailA의 자식 img
    console.log(this.children[0].src);//콘솔 확인시 img의 배열 현식으로 확인되어 [0]을 추가, img의 속성 src를 선택한다.
    //팝업 bg의 자식(contents)의 자식(img)의 src확인
    console.log(popupBg.children[0].children[0].src);
    //img의 속성을 선택하려면 두번 들어가야 하기에 children[0] 두번 작성
    popupShow(this); //팝업 출력함수 호출
    // 대입되는 위치 = 대입되는 값
});

thumbNailA[1].addEventListener('click',function(){
    popupShow(this);
});
thumbNailA[2].addEventListener('click',popupShow);
function popupShow(target){
    console.log('==================함수 시작 위치와 에러 체크');
    //console.log(this.children[0]); //오류 나는 부부 체크 
    popupBg.style.display = 'flex';
    popupBg.children[0].children[0].src = target.children[0].src;
    return;//함수 종료 표시
}
//3. 배경 클릭할때 팝업 숨기기
popupBg.addEventListener('click',popupHide);
function popupHide(){
    return popupBg.style.display = 'none';
}