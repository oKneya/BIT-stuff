// function pozz (){
//     return console.log("pozz");
// }


function informations (){
 console.log(window.navigator.platform);
 console.log(window.navigator.onLine);
 console.log(window.navigator.appVersion);
 console.log(window.location.protocol);
 console.log(window.location.href);

}
informations ();

function isOnline (){
    if (window.navigator.onLine=true){
        console.log("RADI");
    } else if (window.navigator.onLine=false){
        console.log("NE RADI");
    }
}

isOnline();

function windowInfo () {
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);

    console.log(window.screen.height);
    console.log(window.screen.width);
}

windowInfo();

function urlInfo (){
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.search);
}

urlInfo ();

function reload (){
    window.location.reload ();
}

function assign () {
    window.location.assign("https://www.youtube.com/");
}

function replace () {
    window.location.replace("https://www.youtube.com/")
}

function storage (){
    localStorage.getItem("ime");
}

storage ()

function remove (){
    localStorage.removeItem("ime")
}

remove ()

function goBack () {
    window.history.back (2)
}

goBack ()

// function greetings () {
//     alert("ZDRAVO ZIVO GAZDA GRUJO!");
//     confirm("JESI SPREMAN DA TI DROB PROSPEM JATAGANOM??");
//     if (true) {
//         alert("DRZ GACE!!!")
//     }
//     prompt("GDE JE PECARA MOG TETKA PANTELIJE?!");
// }

// greetings ()

function randomBr () {
    const a = [];
    for (let i=0;i<10;i++) {
        a.push((Math.random()*50)+1);
    }
    return a ;
}   

randomBr ()

function floorBr (a) {
    const a2 = [];
    for (let i=0;i<10;i++) {
        a2.push(Math.round(a[i]));
    }
    return [a2, a];
}

floorBr (randomBr())

function maxBr (a){
      const max = Math.max (...a);
      console.log(`najveci element u nizu je ${max}`);
}

maxBr (randomBr())


function datum () {
  console.log(new Date);
}
datum ()