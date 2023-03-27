
const player = document.querySelector("img");
const btn = document.querySelector ("button");

function movePlayer (event){
  const x = event.clientX;
  const y = event.clientY;

  //player-u damo koordinate za top:y, left:x
 player.style.top = y + "px";
 player.style.left = x + "px";

}

function stopMoving (event){
    event.stopPropagation();
    player.style.top ="0px";
 player.style.left ="0px";

}

document.body.addEventListener("click", movePlayer)
btn.addEventListener("click", stopMoving)