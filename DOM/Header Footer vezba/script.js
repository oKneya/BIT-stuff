const body = document.body;
body.style.minHeight = "100vh";
body.style.width = "100%";
body.style.backgroundColor = "beige";

const mainDiv = document.createElement("div");
mainDiv.style.minHeight = "100vh";
mainDiv.style.width = "100%";
mainDiv.style.display= "flex";
mainDiv.style.flexDirection= "column";
mainDiv.style.justifyContent = "space-between";
mainDiv.style.alignItems = "center";

body.prepend(mainDiv)

const header = document.createElement ("div");
header.style.height = "60px";
header.style.width = "100%";
header.style.backgroundColor = "green";

mainDiv.prepend(header)

const rezultat1 = document.createElement ("div");
rezultat1.style.width = "150px";
rezultat1.style.height = "50px";
rezultat1.style.backgroundColor = "white";
rezultat1.classList.add = "rezultat";
rezultat1.style.textAlign = "center";
rezultat1.style.padding = "15px"

mainDiv.append(rezultat1);

const btn = document.createElement ("button");
btn.classList.add = "button1";
btn.style.width = "120px";
btn.style.height = "50px";
btn.style.backgroundColor = "purple";
btn.textContent = "PLUS";
btn.style.color = "white";

btn.addEventListener("click", function() {
const randomBroj = Math.floor(Math.random() * 100) + 1;
rezultat1.innerHTML = randomBroj;
});

const btn2 = document.createElement ("button");
btn2.classList.add = "button2";
btn2.style.width = "120px";
btn2.style.height = "50px";
btn2.style.backgroundColor = "red";
btn2.textContent = "MINUS";
btn2.style.color = "white";

btn2.addEventListener("click", function() {
const randomNum = Math.floor(Math.random() * 100) + 1;
rezultat1.innerHTML = -randomNum;
});

mainDiv.append(btn);
mainDiv.append(btn2);

const footer = document.createElement ("div");
footer.style.height = "60px";
footer.style.width = "100%";
footer.style.backgroundColor = "blue";

mainDiv.append(footer);
