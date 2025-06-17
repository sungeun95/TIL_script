// <ul id="container"> DB 무한스크롤 삽입
const container = document.querySelector('#container');
//3. 무한 스크롤로 인해서 불러오는 DB값이 매번 다르므로 필요한 변수 생성
    //한번에 출력되는 개수는 4
    const itemLoad = 4;
    //스크롤 내릴때 인식하는 반복문의 초기값
    const startIndex = 0;
    //스크롤 내릴때 인식하는 반복문의 종료값(조건)
    let endIndex = startIndex + itemLoad; //초기값 + 출력개수
    console.log(itemLoad,startIndex,endIndex);
//추후 나올 수 있는 오류 해결 (스크롤 위로 올렸을시 나오는 오류-참고:스크롤 이벤트 '검색')을 위한 변수 생성
let isLoading = false //로딩완료 true, 로딩미완료 false
console.log(container);

loadMoreContent() // 1. 처음 보이는 상품 나열을 위한 함수 호출
function loadMoreContent(){
    //변수를 활용한 반복문
    for(let i=startIndex; i<endIndex; i++){ // 2. 복제 호출로 상품 나열을 위한 for문 활용
        const newLi = document.createElement('li');
        //이미지 -> 제품명 -> 요약설명 -> 가격 -> 할인가 -> 세일 ->리뷰
        //할인가 계산식 Math.round((원가 * (1 - 할인율 / 100))).toLocaleString('ko-kr')
        newLi.innerHTML = `<img src="${kurlyDB[i].src}" alt="${kurlyDB[i].name}">`;
        newLi.innerHTML += `<p class="name">${kurlyDB[i].name}</p>`;
        newLi.innerHTML += `<p class="summary">${kurlyDB[i].summary}</p>`;
        newLi.innerHTML += `<p class="price_original"><del>${kurlyDB[i].price.toLocaleString('ko-kr')}원</del></p>`;
        newLi.innerHTML += `<p class="price">${Math.round((kurlyDB[i].price * (1 - kurlyDB[i].sale / 100))).toLocaleString('ko-kr')}원</p>`;
        newLi.innerHTML += `<p class="sale">${kurlyDB[i].sale}%</p>`;
        newLi.innerHTML += `<p class="review">${kurlyDB[i].review}+</p>`;
        container.appendChild(newLi);
    }
    //7. 위 for문 한번 출력 후 스크롤 이벤트로 인해 재출력 시 endIndex 값이 다음 출력되는 DB 개수만큼 증가되게 수정
    endIndex += itemLoad; // itemLoad의 기본값이 4로 endIndex에 증감되게 변경
    //값이 변경됨으로 const를 let으로 변경
    isLoading = false; // 무한 스크롤, 거짓으로 변경하여 로딩반복
}
//++광고 뷰포트 영역에서 등장하는 자바스크립트 DOM 변수 만들기
const ad = document.querySelectorAll('.ad p')
console.log(ad)



//4. 스크롤 이벤트 생성
window.addEventListener('scroll',()=>{
    //++광고 뷰포트 영역에서 등장하는 자바스크립트
    //1. 요소가 뷰포트와의 거리가 어떻게 되는지 확인 변수
    const adTop = ad[0].getBoundingClientRect().top;
    //console.log(adTop)
    //2. 요소가 뷰포트 80% 지점에 도착했을때
    /* 
    if(adTop < window.innerHeight * 0.8){
        ad[0].classList.add('active');
    }else{
        ad[0].classList.remove('active');
    } 
    */
    //복습
    /* 
    const adTop1 = ad[1].getBoundingClientRect().top;
    if(adTop1 < window.innerHeight * 0.8){
        ad[1].classList.add('active');
    }else{
        ad[1].classList.remove('active');
    } 
    */
    //반복문 활용
    for(let i of ad){
        const adTop = i.getBoundingClientRect().top;

        if(adTop < window.innerHeight * 0.8){
            i.classList.add('active');
        }else{
            i.classList.remove('active');
        } 
        
    }

    // 5. 스크롤 위치 확인 ▼
    //현재 뷰포트 하단 위치 window.scrollY + window.innerHeight
    const currentScroll = window.scrollY + window.innerHeight;
    //문서 전체 높이 document.documentElement.scrollHeight
    const totalHeight = document.documentElement.scrollHeight;
    const scrollValue = 0.8; //0~1 기준으로 사용자의 스크롤 위치 파악값
    //console.log(`현재 뷰포트값 ${currentScroll}, 전체 높이 ${totalHeight}`);

    //현재 스크롤 위치가 전체 스크롤 위치 대비 80% 부포트 위치에 왔는지 + DB로드 안된 상태인지.
    //현재 뷰포트값 >= 전체스크롤값 * 사용자 위치값 
    if(currentScroll >= totalHeight * scrollValue && !isLoading){
        //8. 로드된 종료인덱스가 DB 전체 개수와 같으면 종료
        if(endIndex >= kurlyDB.length){return}
        console.log('새로운 콘텐츠 로드 중 ... ');
        isLoading = true; //로딩완료 true
        loadMoreContent(); // 6. 1번에서 생성한 함수 적용
    }
})//스크롤 이벤트 종료위치