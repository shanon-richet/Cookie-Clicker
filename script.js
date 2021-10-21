const compteur= document.querySelector('.compteur')
const cookie= document.querySelector('.cookie')

var myValue= 0;
var click= 0;

cookie.addEventListener('click', clickCounter)
function clickCounter(){
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
