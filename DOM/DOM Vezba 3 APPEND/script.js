//1. napraviti element

const box = document.createElement("div");
const body = document.body;

//2. Dodati mu neki sadrzaj (klasu, atribute, text content)

box.innerHTML= "uspeli smo da napravimo div";
box.className = "box" 

//appendChild- kaci box kao poslednji child body-ja, prima samo jedan node (pre zatvarajuceg body-ja)
// parent.appendChild(child)

//3. append - kaci box kao poslednji child body-ja, moze da primi listu node-ova (pre zatvarajuceg body-ja)
body.append(box)

//prepend -kaci box kao prvi child bodu-ja (odmah posle otvarajuceg body-ja)
//body-preprend(box)