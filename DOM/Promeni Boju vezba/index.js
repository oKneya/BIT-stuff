var h1 = document.createElement("h1")
document.body.append(h1)
console.log(document);
h1.innerText="ovo je proba"

var dugme = document.querySelector(".body-button");

var body = document.querySelector("body");

function promeniBoju() {
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    body.style.backgroundColor = `rgb(${r} ${g} ${b})`
}


// dugme.addEventListener("click", promeniBoju);

window.addEventListener("load", setInterval (() => {
promeniBoju();
},300))
