const user = JSON.parse(sessionStorage.getItem("gitHubUser"));
const rep =  user.repos_url;
const reQuest = new XMLHttpRequest();

reQuest.open("GET", rep);
reQuest.send();
reQuest.onload = function () {
    if (reQuest.status >= 200 && reQuest.status <400){
        createRepos(reQuest.responseText);
        console.log(reQuest.responseText);
    }
}

function createRepos (obj) {
    obj.items.forEach((element)=>{
        const title = document.createElement("p");
    

    })
}

// const body = document.body;
// const main = document.createElement("main")
// body.append(main);



