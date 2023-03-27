const URL = `https://api.github.com/search/users?q=`
const searchButton = document.querySelector("button");
const input = document.querySelector("input");
const main = document.querySelector("main");
const reQ = new XMLHttpRequest(); //pozivanje funkcije koja vraca objekat sa metodama

searchButton.addEventListener("click", () =>{
    reQ.open("GET", URL+input.value); //1. izaberi metodu (GET) , onda URL API (ovaj sa vrha zadatka) 

    reQ.send(); // 2. slanje podataka i iscekivanje odgovora

    reQ.onload = function (){ // tumacenje vracenog odgovora ( da li je OK status itd...)
        if(reQ.status >=200 && reQ.status < 400){
            setGitName(JSON.parse(reQ.responseText)); // a responseText je upravo TAJ odgovor
        } // posto odgovor dolazi  u JSON formatu, moramo da ga isparsiramo da bi mogli da ga ocitamo u JS (JSON.parse)
    }
 })


 function setGitName(GITusers) {
    console.log(GITusers);
    main.innerHTML=""; // NE ZABORAVI OVO !!!!!!!!!!!!!!!!!!!!!!!!!!
    main.style.flexDirection = "row";
    main.style.justifyContent = "space-between"; 
    GITusers.items.forEach((user) => {
        const cardPerson = document.createElement("div");
        cardPerson.classList.add("classCard");
        // cardPerson.style.direction = "flex";
        // cardPerson.style.justifyContent = "center";
        // cardPerson.style.alignItems = "center";
        main.append(cardPerson);
        const namePerson = document.createElement("p");
        namePerson.classList.add("className");
        namePerson.style.textAlign = "center";
        namePerson.textContent = user.login;
        cardPerson.append(namePerson);
        cardPerson.addEventListener("click" , () => {
            sessionStorage.setItem("gitHubUser",JSON.stringify(user));
            window.location.href = "index2.html"
            
        })
        const imgPerson = document.createElement("img");
        imgPerson.classList.add("classImg");
        imgPerson.setAttribute("src", user.avatar_url);
        cardPerson.append(imgPerson);

    });
}


