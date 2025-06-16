//window.scrollTo(x,y) 문서 스크롤 이동하는 내장함수(절대좌표)
const btn1 = document.querySelector('#btn1');
const topBtn = document.querySelector('#top');
console.log(btn1,topBtn)

btn1.addEventListener('click',()=>{
    //window.scrollTo(0,300)/* 숫자는 자동으로 px로 반환된다. */
    //추가 속성이나 메서드 연결 시에는 x y를 {객체} 문법으로 작성한다.
    window.scrollTo({
        left:0,
        top:500,
        behavior:'smooth'
    })
})
//behavior:'smooth'
//위 동작은 CSS의 body, html {scroll-behavior:'smooth'} 기능 동일
//js를 동작하는 경우 CSS가 먹히지 않을 경우가 있기에 해당 기능은 js에서 객체로 처리해주는것이 좋다.

topBtn.addEventListener('click',()=>{
    //window.scrollTo(0,0)
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    })
})

//특정 위치로 바로가기, 위치속성 offsetTop 활용방법
const blogBtn = document.querySelector('#blog_btn');
const cafeBtn = document.querySelector('#cafe_btn');
const newsBtn = document.querySelector('#news_btn');
const webtoonBtn = document.querySelector('#webtoon_btn');
const navBtn = document.querySelectorAll('.nav button'); // 4
const sections = document.querySelectorAll('section'); // 4
console.log(blogBtn,cafeBtn,newsBtn,webtoonBtn,navBtn,sections);

//forEach 활용 navBtn, section 묶기
//forEach의 시작은 이벤트DOM 대상 권장
navBtn.forEach((obj, ind)=>{
    console.log(obj, ind);
    //obj 클릭이벤트 생성
    obj.addEventListener('click',()=>{
        //클릭 이벤트 내에서 window.scrollTo동일 인덱스의 sections top위치 이동
        window.scrollTo({
            left:0,
            top:sections[ind].offsetTop,
            behavior:'smooth',
        })
    })
})

/* 
blogBtn.addEventListener('click',()=>{
    //window.scrollTo(0, sections[0].offsetTop);
    window.scrollTo({
        left:0,
        top:sections[0].offsetTop,
        behavior:'smooth'
    })
})
cafeBtn.addEventListener('click',()=>{
    //window.scrollTo(0, sections[1].offsetTop);
    window.scrollTo({
        left:0,
        top:sections[1].offsetTop,
        behavior:'smooth'
    })
})
newsBtn.addEventListener('click',()=>{
    //window.scrollTo(0, sections[2].offsetTop);
    window.scrollTo({
        left:0,
        top:sections[2].offsetTop,
        behavior:'smooth'
    })
})
webtoonBtn.addEventListener('click',()=>{
    //window.scrollTo(0, sections[3].offsetTop);
    window.scrollTo({
        left:0,
        top:sections[3].offsetTop,
        behavior:'smooth'
    })
}) 
*/

//스크롤 상대적 이동 toon_wrap의 DOM.scrollBy
//이전, 다음 버튼 클릭 시 웹툰 width만큼 가로 스크롤(윈도우가 아닌 toon_wrap) 이동하기
const toonWrap = document.querySelector('.toon_wrap');
const toonNext = document.querySelector('.toon_wrap_all .next');
const toonPrev = document.querySelector('.toon_wrap_all .prev');
console.log(toonWrap,toonNext,toonPrev);

toonNext.addEventListener('click',()=>{
    toonWrap.scrollBy(toonWrap.children[0].children[0].offsetWidth,0)
})

toonPrev.addEventListener('click',()=>{
    toonWrap.scrollBy(-toonWrap.children[0].children[0].offsetWidth,0)
})
