const compteur= document.querySelector('input')
const cookie= document.querySelector('.cookie')
var myValue= 0;

cookie.onclick= () => {
    compteur.value= myValue;
    myValue = myValue + 2;
    compteur.innerHTML = myValue;
}

while (myValue < 5){
    cookie.onclick= () => {
        compteur.value= myValue;
        myValue = myValue + 5;
        compteur.innerHTML = myValue;
    }
}