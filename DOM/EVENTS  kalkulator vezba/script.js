const number1 = document.querySelector ("#no1");
const number2 = document.querySelector ("#no2");
const saberi = document.querySelector (".saberi");
const oduzmi = document.querySelector (".oduzmi");
const pomnozi = document.querySelector (".pomnozi");
const podeli = document.querySelector (".podeli");
const RZLT = document.querySelector (".rezultat");

saberi.addEventListener("click", saberiF);
oduzmi.addEventListener("click", oduzmiF);
pomnozi.addEventListener("click", pomnoziF);
podeli.addEventListener("click", podeliF);

function saberiF (){
    const rezultat = number1.value*1 + number2.value*1;
    RZLT.innerHTML = rezultat;
};

function oduzmiF (){
    const rezultat = number1.value*1 - number2.value*1; 
    RZLT.innerHTML = rezultat;
};

function pomnoziF (){
    const rezultat = number1.value*1 * number2.value*1;
    RZLT.innerHTML = rezultat;
}

function podeliF (){
    const rezultat = number1.value*1 / number2.value*1;
    RZLT.innerHTML = rezultat;
}

