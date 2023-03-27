var h1 = document.querySelectorAll("h1");

var increment = document.querySelectorAll(".increment")

var decrement = document.querySelectorAll(".decrement");



for (var i=0; i <increment.length; i++) {
   dodajEvent(i);
}

function dodajEvent(index){
    var counter = 0;
    function add(){
        counter++;
        h1[index].innerText = counter;
    }

    function subtract(){
        counter--;
        h1[index].textContent = counter;
    }

    increment[index].addEventListener("click",add);
    decrement[index].addEventListener("click", subtract);
}



