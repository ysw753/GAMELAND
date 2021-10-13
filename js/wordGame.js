const input = document.querySelector("input");
const suggestion=document.querySelector("#suggestion");

const btn = document.querySelector(".btn");

const scorerank = document.querySelector(".score>h1");
const score = document.querySelector(".score>h2");
let word;
let newWord;
let cnt=0
const fillword=()=>{
    if(!word){
        word=input.value
        suggestion.innerHTML=word;
        input.value='';
    }else{
         newWord=input.value
        if(word[word.length-1]===newWord[0])
        {
            word=newWord
            suggestion.innerHTML=newWord;
            input.value='';
            cnt+=1;
            score.innerHTML=`점수: ${cnt}`;
        }else{
            scorerank.innerHTML=`최고점수: ${cnt}`;
            cnt=0
            score.innerHTML=`점수: ${cnt}`;
            input.value='';
            suggestion.innerHTML='';
            word = '';
        }
    }
}
btn.addEventListener("click",fillword);

input.addEventListener('keyup',(event)=>{
    if(event.keyCode===13){
        fillword();
    }  
});

