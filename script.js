//localStorage.setItem('score', '20')
const score= document.querySelector('.score')
const compteurDeClick= document.querySelector('.click')
const cookie= document.querySelector('object')
const clock= document.querySelector('.timer')
const stored= localStorage.getItem('textinput')

var timer= 0
var myValue= 0
var click= 0
var cookieImage= document.querySelector('object')
if(localStorage.getItem('textinput') !== null){
    myValue= parseInt(localStorage.getItem('textinput'))
    score.value= stored
}
const saveToStorage= () => {
    localStorage.setItem('textinput', score.value)
}

cookie.addEventListener('click', saveToStorage)
cookie.addEventListener('click', clickCounter)

function clickCounter() {
compteurDeClick.value= click
click= click + 1
compteurDeClick.innerHTML= click
} 

cookie.addEventListener('click', cookieClicker)

function cookieClicker() {
    score.value= myValue
    myValue= myValue + 1
    score.innerHTML= myValue
    if (myValue > 5) {
        cookie.onclick= () => {
        score.value= myValue
        myValue= myValue + 2
        score.innerHTML= myValue
        }
    }
}

setInterval(() => {
   clock.value= timer
   timer= timer + 1
   clock.innerHTML= timer
}, 1000);

setInterval(() => {
    clickBefore= click
    let cps= 0
    let second= timer/ timer
    setTimeout(() => {
        clickAfter= click
    }, 999)
    
    cps = + clickBefore - clickAfter
    var clickParSeconde= document.querySelector('.cps')
    clickParSeconde.value= 'your cps: ' + cps
    clickParSeconde.innerHTML= 'your cps:' + cps
    if (cps == 0){
        return;
    }
    if (cps >= 7){
        myValue= myValue + 50
    }
    if (cps >= 9){
        myValue= myValue + 100
    }
}, 1000)

