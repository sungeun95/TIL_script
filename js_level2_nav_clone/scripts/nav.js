//데스크탑 메뉴 복제 -> 모바일 메뉴 붙여넣기
const mNavOpen = document.querySelector('.m_nav_open');
const gnb = document.querySelector('.gnb');
const gnbClone = gnb.cloneNode(true);
console.log(mNavOpen, gnb, gnbClone);
mNavOpen.appendChild(gnbClone);

//데스크탑 nav-lnb 숨기기
//모바일 m_nav_wrap 숨기기
const navLnb = document.querySelectorAll('nav .lnb');
const mNavWrap = document.querySelector('.m_nav_wrap');
console.log(navLnb, mNavWrap);
for(let i=0; i<=4; i++){
    //navLnb 5개이고 5번 똑같은 값 반복해서 작성하지 않으려면 반복문 작성
    //navLnb 5개니까 0,1,2,3,4 인덱스 생각하고 0으로 시작해서 4까지 커지는 반복문 제작
    navLnb[i].style.display = 'none';
}
//mNavWrap.style.display = 'none';
mNavWrap.style.overflow = 'hidden';
mNavWrap.style.height = '0';
//nav 마우스 올렸을 때, lnb(변수 navLnb 활용), lnb_bg 보이기
const nav = document.querySelector('nav');
const lnbBg = document.querySelector('.lnb_bg');
console.log(nav,lnbBg);
lnbBg.style.display = 'none'; //마우스 이벤트 전 숨기기 
//다수의 태그로 DOM을 querySelectorAll로 불러왔다면 배열'[]'로 작성해야한다.
nav.addEventListener('mouseover',()=>{ 
    lnbBg.style.display = 'block';
    //navLnb.style.display = 'block';
    for(let i=0; i<navLnb.length; i++){
        navLnb[i].style.display = 'block';
    }
});
//nav 마우스를 나가면 lnb, lnb_bg 숨기기
nav.addEventListener('mouseout',()=>{ 
    lnbBg.style.display = 'none';
    for(let i=0; i<navLnb.length; i++){
        navLnb[i].style.display = 'none';
    }
});

//모바일 메뉴 클릭시 m_nav_wrap 보이기
const mNav = document.querySelector('.m_nav');
const mNavClose = document.querySelector('.m_nav_wrap .close');
console.log(mNav, mNavClose);
mNavWrap.style.transition = 'height 0.3s linear'
mNav.addEventListener('click',()=>{
    //mNavWrap.style.display = 'block';
    mNavWrap.style.height = '700px'
})
//x 클릭 시 m_nav_wrap 숨기기
mNavClose.addEventListener('click',()=>{
    //mNavWrap.style.display = 'none';
    mNavWrap.style.height = '0'
})