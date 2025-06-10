// 오늘 날짜를 임력 후 '발매일 계산하기' 클릭 시 현재부터 지금까지 몇일이 남았는지, 몇시간이 자났는지 알려주는 프로그램
// 지금까지 흐른 날짜 계산법 : 1000*60*60*24로 나누기
// 지금까지 흐른 시간 계산법 : 1000*60*60로 나누기 

const pokemonRd = document.querySelector('#pokemon_rd');
const rdBtn = document.querySelector('#rd_btn');
const rd = document.querySelector('.rd em');
const rdT = document.querySelector('.rdt em');
console.log(pokemonRd,rdBtn,rd,rdT);

rdBtn.addEventListener('click',pokemonRdFun);
function pokemonRdFun(){
    //console.log(new Date(pokemonRd.value));
    //console.log(new Date());
    const pDate = new Date(pokemonRd.value);
    const rDate = new Date(2025,9,6);
    const pokemonDate = pDate.getTime() - rDate.getTime();
    console.log(pokemonDate);
    rd.textContent = Math.abs(Math.floor(pokemonDate / (1000*60*60*24)));
    rdT.textContent = Math.abs(Math.floor(pokemonDate / (1000*60*60)));

}
