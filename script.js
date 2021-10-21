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
   
cookie.addEventListener('click', cookieClicker)
function cookieClicker() {
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
setTimeout(() => {
   clock.value= timer;
   timer= timer + 1;
   clock.innerHTML= timer;
}, 1000);

setInterval(() => {
    clickBefore= click;
    let cps= 0;
    let second= timer/ timer;
    setTimeout(() => {
        clickAfter= click;  
    }, 999);
    cps = + clickBefore - clickAfter;
    console.log('your cps:' + cps) 
    if (cps >= 5){
        myValue= myValue + 50;
    }
    if (cps >= 10){
        myValue= myValue + 100;
    }
    }, 1000);


