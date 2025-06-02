const birthday_flower = [
    {/* 0 */
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{/* 1 */
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{/* 2 */
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{/* 3 */
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{/* 4 */
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{/* 5 */
        month:6,
        flower:'백합',
        content:'순결'
    },{/* 6 */
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{/* 7 */
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{/* 8 */
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{/* 9 */
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{/* 10 */
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{/* 11 */
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]

const month = document.querySelector('input[name=month]');
const resulrBtn = document.querySelector('#resulr_btn');
const result = document.querySelector('#result');
console.log(month,resulrBtn,result);

result.style.display = 'none'; // p CSS 감추기

resulrBtn.addEventListener('click',bFlower);
function bFlower(){
    result.style.display = 'block';  // p CSS 보이기
    /* result.textContent = `${month.value}월의 탄생화는 ${birthday_flower[month.value-1].flower}, 꽃말은 ${birthday_flower[month.value-1].content}입니다. ` */
    if(month.value >= 1 && month.value <= 12){
        result.textContent = `${month.value}월의 탄생화는 ${birthday_flower[month.value-1].flower}, 꽃말은 ${birthday_flower[month.value-1].content}입니다. `
    }else if(month.value <= 1){
        result.textContent =`1월보다 전의 달은 없어요ㅠㅠ 다시 입력해주세요`
    }else if(month.value >= 12){
        result.textContent =`12월까지만 입력해주세요ㅠㅠ`
    }
}