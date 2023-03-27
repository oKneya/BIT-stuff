const charID = sessionStorage.getItem("characterID");
const body = document.body;

fetch(`https://rickandmortyapi.com/api/character/${charID}`)
.then(res => res.json())
.then(data => renderCharacter(data))

function renderCharacter(obj) {
    console.log(obj)
    body.innerHTML = `
    <div class="card">
    <h1>${obj.name}</h1>
    <h2>Species: ${obj.species}</h2>
    <img src=${obj.image} alt="character">
    <h3>Status: ${obj.status}</h3>
    <h3>Location: ${obj.location.name}</h3>
    <h3>Origin: ${obj.origin.name}</h3>
    <h3>Episodes: ${obj.episode.length}</h3>
    <h3>List of episodes:
        <ul>
            ${obj.episode.map(episode => `<li>${episode}</li>`)}
        </ul>
    </h3>
    </div>
    `
}