const button = document.querySelector("button");
const turnOff = document.querySelector(".turn-off")
const body = document.body;

let isBackgroundDisabled = false;

const toggleBackground = () => {
  if(!isBackgroundDisabled){
  body.classList.toggle ("grey-bgc")
}
};

const disableBackGroundChange = () => {
  isBackgroundDisabled = true;
}
button.addEventListener("click", toggleBackground);
turnOff.addEventListener("click", disableBackGroundChange)


