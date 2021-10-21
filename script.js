<<<<<<< HEAD
const score= document.querySelector('.score')
const compteurDeClick= document.querySelector('.click')
const cookie= document.querySelector('.cookie')
const clock= document.querySelector('.timer')

var timer= 0;
=======
const compteur= document.querySelector('.compteur')
const cookie= document.querySelector('.cookie')

>>>>>>> 052b99c39b0d1281267f8b1db76ff528dbfd51f2
var myValue= 0;
var click= 0;

cookie.addEventListener('click', clickCounter)
function clickCounter(){
<<<<<<< HEAD
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
=======
normal.value= click;
click= click + 1;
normal.innerHTML= click;
}
cookie.onclick= () => {
    compteur.value= myValue;
    myValue= myValue + 1;
    compteur.innerHTML= myValue;
    if (myValue > 5){
        cookie.onclick= () => {
            compteur.value= myValue;
            myValue= myValue + 2;
            compteur.innerHTML= myValue;
        }
    }
}
>>>>>>> 052b99c39b0d1281267f8b1db76ff528dbfd51f2
