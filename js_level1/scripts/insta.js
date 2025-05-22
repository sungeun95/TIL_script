// 인스타그램 알고리즘
// 1. 프로필 클릭 시 개인 프로필 페이지로 이동 기능 (o) - 페이지제작필요
// 클릭 == 터치 동일 이벤트 처리
const profileDOM = document.querySelector('.profile');
console.log(profileDOM);
profileDOM.addEventListener('click',profileGo);
function profileGo(){
    return window.location.href = 'insta_profile.html';
}

// 2. 메뉴기능을 클릭시 하단에서 매뉴에 관한 목록(저장~신고등)이 나온다. (o) - 저장~신고제작
// 3. 사진 한번 터치 시 반응없음 (x js)
// 4. 사진 두번 터치 시 좋아요 자동 등록 (o)
const photo = document.querySelector('main > .photo');
const likeImg = document.querySelector('.like img');
console.log(photo, likeImg);
console.log(likeImg.src);
//객체.속성 // 속성읽기
//객체.속성=값 // 속성 값 변경
photo.addEventListener('dblclick',likeOn); //dblclick = 더블클릭후 이벤트 적용
function likeOn(){
    // console.log('test'); 더블클릭시 적용되는지 확인
    return console.log(likeImg.src="./images/icons/like_on.png");
}
// 5. 좋아요 하트아이콘을 누르면 좋아요 수가 오르고 색이 변경된다.(o) 다시 선택시 헤제 반복 (x-조건문공부필요)
// 이미지 더블클릭 하기 전 기준
// 위 likeImg 변수 활용(추가 변수 X)
likeImg.addEventListener('click',likeImgOn);
function likeImgOn(){
    return console.log(likeImg.src="./images/icons/like_on.png");
}

// 6. 댓글 아이콘을 누르면 댓글 입력창이 실행되고(o)-제작필요, 실행화면에서 바깥쪽 영역 터치시 입력창 닫힘(o)
// 7. 공유인 비행기 아이콘을 누르면 하단에서 공유가능 계정 표시된 창 실행(o)-제작필요,바깥쪽 영역 터치시 닫힘(o)
// 8. 즐겨찾기 아이콘을 누르면 하단에서 즐겨찾기에 관한 저장(x - DB필요) 목록이 나와 저장됨과 동시에 컬력션 화면 출력, 바깥쪽영역 터치시 닫힘.(o)
// 9. 글 1줄, 날짜만 미리표시, 글 터치 시 전체 내용 (나머지 글 줄과 해시태그 포함) 펼치기(o)
const storyDOM = document.querySelector('.story'); 
const dateDOM = document.querySelector('.date');
const tagDOM = document.querySelector('.tag');
console.log(storyDOM,dateDOM);
// 함수를 생성하지 않고 바로 작성한 이유는? 반복이 아니고 즉시 실행되기때문
tagDOM.style.display = 'none';
// 글 클릭 시 태그 표시
storyDOM.addEventListener('click',storyClick);
function storyClick(){
    return tagDOM.style.display = 'block';
}

// 10. 태그 부분을 클릭하면 태그로 검색한 창이 나온다.(o)
console.log(tagDOM);
tagDOM.addEventListener('click', tagGO);
function tagGO(){
    return window.location.href = 'insta_tag.html';
}
// 별도의 동적기능 없이 단순한 링크만 있는 경우 js없이 a태그에 링크 걸기
// 동적기능 예) 해외 IP접속차단, 동일IP접속차단, 성인사이트접속인증, 로그인에 따른 접속가능 페이지 일 경우 로그인 유무 확인 등.

// 11. 날짜 기능없음. (x js)
// 추가 페이지 목록) 프로필페이지(insta_profile.html), 저장~신고페이지, 댓글입력창, 공유가능계정표시, 즐겨찾기 페이지, 태그 검색 페이지(insta_tag.html)