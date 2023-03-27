const url = "https://api.chucknorris.io/jokes/random";

function getJoke() {
  divZaVic.innerHTML = "";
  fetch(url)
    .then((response) => response.json())
    .then((data) => iskoristiObjekat(data)); // chain promise
}

const body = document.body;
const divZaVic = document.createElement ("div");
body.style.display = "flex";
body.style.minHeight = "100vh";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.backgroundColor = "purple";
body.style.flexDirection = "column";

const dugme = document.createElement("button");
dugme.textContent = "slab sam u vic ali..";
body.prepend(dugme);
body.prepend(divZaVic);

function iskoristiObjekat(objekat) {
  const vicParagraf = document.createElement("p");
  vicParagraf.textContent = objekat.value;
  divZaVic.prepend(vicParagraf);

}

dugme.addEventListener("click", getJoke);
