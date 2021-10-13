const candidate = Array(45).fill().map((v,i)=>i+1);
const shuffle=[];

//피셔 에이쳐 셔플
while(candidate.length>0){
    const random = Math.floor(Math.random()*candidate.length);
    const spliceArray = candidate.splice(random,1);
    const value = spliceArray[0];
    shuffle.push(value);
}
//참고 splice는 원본을 바꾼다 splice는 원본을 바꾸지 않는다.
//sort 는 원본을 수정하는데 slice를 중간에 껴주면 원본이 수정되지않는다.
//slice 가 참조기 때문에  원본을 참조한거를(복제)sort가 바꾸는거라서
const winBalls= shuffle.slice(0,6).sort((a,b)=>a-b);
const bonus = shuffle[6];


const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const showBall = (number, $target)=>{
    const $ball = document.createElement('div');
    $ball.className='ball';
    $ball.textContent=number
    $target.appendChild($ball);
};

for(let i =0; i<6;i++){
    setTimeout(()=>{
        showBall(winBalls[i],$result)
    },(i+1)*1000);
}
setTimeout(()=>{
    showBall(bonus,$bonus)
},7000)
        


