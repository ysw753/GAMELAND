//숫자 9개
const number =[];
for(let i =1; i<=9; i+=1){
    number.push(i)
}
//랜덤의 4자리숫자를 받기
const answer =[];

for(let i =0; i<4; i+=1){
    const index = Math.floor(Math.random()*number.length)
    answer.push(number[index]);
    number.splice(index,1)
}
console.log(answer);
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const showText = document.querySelector("#showText");
const record = document.querySelector("#record");
const reset= document.querySelector("#reset");

const tries=[];
let showTextChild;
// value 값의 유효성 판별
function checkValue(value){
    if(value.length!==4){
        showTextChild="4자리의 숫자를 입력해주세요!";
        return false;
    } 
    if(new Set(value).size !== 4){
        showTextChild="중복없이 입력해주세요!"
        return false;
    }
    if(tries.includes(value)){
        showTextChild="이미 시도한 값입니다.";
        return false;
    }
    return true;
}
reset.addEventListener("click",()=>{
    window.location.reload();
})
form.addEventListener('submit',(event)=>{
    const value = input.value;
    event.preventDefault();
    //문제있을경우
    if(!checkValue(value)){
        showText.innerHTML=showTextChild;
        input.value='';
        return;
    }
    //입력값 문제없음
    tries.push(value)
    showText.innerHTML='';
    
    if(answer.join('')===value){
        tries.push()
        showText.innerHTML=`홈런!!! ${answer.join('')}을 맞췄습니다.`
        return
    }
    if(tries.length>=9){
        showText.innerHTML=`패배...ㅠㅠ 정답은 ${answer.join('')}`
    }
    //몇스트라이크 몇 볼인지
    let strike=0;
    let ball = 0;
    for(let i =0; i<answer.length;i++){
        const index = value.indexOf(answer[i])
        if(index>-1){//일치하는 숫자발견
            if(index===i){//자리수도 같음
                strike+=1;
            }else{
                ball+=1;
            }
            
        }
        
    }
    record.append(`${value}는 ${strike} 스트라이크 ${ball} 볼 입니다.`,document.createElement('br'));
    input.value='';

})
