const score= document.querySelector('.score')
const compteurDeClick= document.querySelector('.click')
const cookie= document.querySelector('.cookie')
const clock= document.querySelector('.timer')

var timer= 0;
var myValue= 0;
var click= 0;

cookie.addEventListener('click', clickCounter)
function clickCounter(){
compteurDeClick.value= click;
click= click + 1;
compteurDeClick.innerHTML= click;
}

cookie.onclick= () => {
    score.value= myValue;
    myValue= myValue + 1;
    score.innerHTML= myValue;
    if (myValue > 5){
        cookie.onclick= () => {
            score.value= myValue;
            myValue= myValue + 2;
            score.innerHTML= myValue;
        }
    }
}

setInterval(() => {
   clock.value= timer;
   timer= timer + 1;
   clock.innerHTML= timer;
}, 1000);