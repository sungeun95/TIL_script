let num = 6; //0, 400, 800 출력을 위한 변수

/* 
setInterval(numTimer,2000);
function numTimer(){
    num++
    console.log(num);
} */

/* 
const numTimer = setInterval(function(){
    num++
    console.log(num);
},2000); 
*/

/* 
const numTimer = setInterval(()=>{
    num++
    console.log(num);
},2000);
*/


//이벤트의 다양한 함수 호출방법 (콜백, 화살표함수, 익명함수 순서)
//DOm.addEventListener('event', 콜백함수)
//DOm.addEventListener('event', ()=>{})
//DOm.addEventListener('event', function(){})

//타이머의 다양한 함수 작성방법
//setInterval(콜백함수,밀리초);
//(위) 특징 : 콜백함수를 재사용 할 수 있다.
//const 변수명 = setInterval(콜백함수,밀리초);
//(위) 특징 : 타이머를 담은 변수명으로 타이머 정지, 다시재생등의 제어를 할 수 있다.

const slideContainer = document.querySelector('.slide_container');
console.log(slideContainer)
slideContainer.style.transition = 'transform 0.5s';
//트랜지션은 매번 달라지는게 아니기에 타이머 밖에서 사용해야한다.
/* 
const slideTimer = setInterval(()=>{
    num++;
    if(num>6){num=0}
    slideContainer.style.transform = `translateX(-${400*num}px)`;
    console.log(`현재 num:${num}, X축 값:${400*num}`);
},2000); 
*/
const slideTimer = setInterval(()=>{
    num--;
    if(num<=0){num=6}
    slideContainer.style.transform = `translateX(-${400*num}px)`;
    console.log(`num : ${num} / x400 : ${400*num}`);
},2000)
//주의점 1.처음 시작은 1번으로 시작. 0으로 시작하면 첫번째 슬라이드를 그만큼 오래 유지하는 것과 같다.
