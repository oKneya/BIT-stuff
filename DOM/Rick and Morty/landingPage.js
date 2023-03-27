const url = "https://rickandmortyapi.com/api/character";
const characters = document.getElementById("characters");
const body = document.body;

async function getCharacters() {
  //   const a = fetch(url).then((response) =>
  //     response.json().then((data) => console.log(data.results))
  //   );
  const response = await fetch(url);

  const result = await response.json();
  return result;
}

getCharacters().then((data) => {
  characters.innerHTML = data.results
  .map(
    (char) => 
    `
    <div class="character">
    <span>${char.status}</span>
    <img src=${char.image} />
    <div  class="character-Info" data-characterID=${char.id}>
    <h3>${char.name}</h3>
    </div>
    
    </div>
    `
    )
    
    .join("");
    
    const kartica = document.querySelectorAll(".character");
    // console.log(char)
    
    const myModal = document.createElement("div");
    myModal.classList.add("modal");
    
    kartica.forEach((Element) => {
      Element.addEventListener("click", () => {
        body.prepend(myModal);
        console.log(data);
        data.results.forEach(element => {
          myModal.innerHTML = `
          <div class="card">
          <h1>${element.name}</h1>
          <h2>Species: ${data.results[0].species}</h2>
          <img src=${Element.image} alt="character">
          <h3>Status: ${Element.status}</h3>
          <h3>Location: ${Element.location}</h3>
          <h3>Origin: ${Element.origin}</h3>
          <h3>Episodes: ${Element.episode}</h3>
          </div>
        });
       
      `
    });
  });
});
})
function clickedCharacter(id) {
  sessionStorage.setItem("characterID", id);

      // window.location.href = "/showMore.html"
}

// Get the modal
var modal = document.getElementById("myModal");

// var bodey = document.getElementById("BODEY");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the character, open the modal
// characters.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
