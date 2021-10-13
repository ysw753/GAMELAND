const today = new Date();
year=today.getFullYear();
month=today.getMonth()+1;
day=('0' + today.getDate()).slice(-2)
const div = document.createElement("div")
const span= document.createElement("span");
document.body.appendChild(div)
div.appendChild(span);
span.innerHTML=`${year}/${month}/${day}`;

const clock = document.querySelector('#clock');
clock.appendChild(div)

//게임 목록
const list = document.querySelector()