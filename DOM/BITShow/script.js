const mainDiv = document.querySelector(".mainDiv");

const URL = "http://api.tvmaze.com/shows";

const search = document.querySelector("input");
const ul_lista = document.querySelector("ul");
const dugme = document.querySelector("button");

const searchUrl = "https://api.tvmaze.com/search/shows?q=";

function fetchURL () {
    const reQuest = new XMLHttpRequest();

    reQuest.open("GET", URL);
    reQuest.send();

    reQuest.onload = function (){
        if (reQuest.status >=200 && reQuest.status <400) {
            list50Shows(JSON.parse(reQuest.responseText));
        }
    };
}

function searchFetch (){
    const reQuest = new XMLHttpRequest();

    reQuest.open("GET", searchUrl + search.value);
    reQuest.send()

    reQuest.onload = function (){
        if (reQuest.status >=200 && reQuest.status <400) {
            list50Shows(JSON.parse(reQuest.responseText));
        }
    };
}

function dropDownShows (showList) {
    ul_lista.innerHTML = "";
    showList.forEach((film) => {
        const paragraf = document.createElement("li");
        paragraf.textContent = film.show.name;
        ul_lista.append(paragraf)
    })
}

function list50Shows (listOfShows){
    const workingCopy = [...listOfShows];
    workingCopy.sort((a, b) => b.rating.average - a.rating.average);
    const sorted50BestRated  = workingCopy.filter ((e, i) => i<50);
    console.log(sorted50BestRated);
    console.log(listOfShows);
    sorted50BestRated.forEach((show) => {
        const cardDiv = document.createElement ("div");
        cardDiv.className = "cardDiv";
        mainDiv.append(cardDiv);
        const image = document.createElement("img");
        image.setAttribute("src", show.image.medium);
        image.className = "imageInDiv";
        cardDiv.prepend(image);
        const name = document.createElement("h3");
        name.textContent = show.name;
        name.className = "showNameInDiv";
        cardDiv.append(name);
        const rating = document.createElement("span");
        rating.className = "ratingInDiv";
        rating.style.color = "white";
        rating.textContent = `Rating: ${show.rating.average}`;
        cardDiv.append(rating);
        const duration = document.createElement("span");
        duration.style.color = "white";
        duration.className = "trajanje";
        duration.textContent = `Duration: ${show.runtime} min`;
        cardDiv.append(duration);
    });

}
 window.addEventListener("load" , fetchURL);

 search.addEventListener("keydown" , function (e) {
    if (e.key === "Enter"){
        searchFetch();
    }
 }); 

 search.addEventListener("input" , () => {
    ul_lista.innerHTML = "";
    reQuest.open("GET" ,`https://api.tvmaze.com/search/shows?q=${input.value}`);
    reQuest.send();
    reQuest.onload = () => {
        reQuest.onload = function (){
            if (reQuest.status >=200 && reQuest.status <400) {
                list50Shows(JSON.parse(reQuest.responseText));
            }
        };
    }


 });

 dugme.addEventListener("click", (event) =>{
    event.preventDefault();
    searchFetch();
 })

 search.addEventListener("change", () => {
    ul_lista.style.display = "none";
 });


