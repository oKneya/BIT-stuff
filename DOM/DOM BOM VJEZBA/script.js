const niz = [
  {
    name: "Jon",
    surname: "Doe",
    age: 33,
    dog: false,
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    sex : "male",
  },
  {
    name: "Sammy",
    surname: "Smith",
    age: 27,
    dog: false,
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    sex : "male",
  },
  {
    name: "Valentina",
    surname: "Herrera",
    age: 19,
    dog: true,
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    sex : "female",
  },
  {
    name: "Gabriel",
    surname: "Hessus",
    age: 36,
    dog: true,
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    sex : "female",
  },
  {
    name: "Morandi",
    surname: "Breezer",
    age: 32,
    dog: false,
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    sex : "male",
  },
  {
    name: "Abhu",
    surname: "Vassar",
    age: 14,
    dog: true,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    sex : "male",
  },
];

const body = document.body; //prvo pravimo body da bi iskoristili niz
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.minHeight = "100vh";

const divWrapper = document.createElement("div"); //
divWrapper.style.minHeight = "100%"; // ovde dajemo properties !
divWrapper.style.display = "flex";
divWrapper.style.justifyContent = "center";
divWrapper.style.alignItems = "center";


body.prepend(divWrapper);

const mainButton = document.createElement("button"); // pravimo dugme
mainButton.textContent = "dodeli mu vrednost"; // dodeljujemo text dugmetu
mainButton.style.padding = "10px"; // dajemo vrednosti dugmetu
mainButton.style.borderRadius = "20px";
mainButton.style.cursor = "pointer";
mainButton.style.border = "none";
mainButton.style.fontWeight = "700";
mainButton.style.backgroundColor = "purple";
mainButton.style.color = "white";

body.prepend(mainButton); // vezivanje dugmeta sa divom

function addCardsToDiv() { // forEach petljmo prolazimo kroz ceo niz
  divWrapper.innerHTML = ""; //ovim se svaki put izgubi dugme na koje klikcemo, a ostane kontent
  niz.forEach((e) => {
    const divOsoba = document.createElement("div");
    divOsoba.style.display = "flex";
    divOsoba.style.justifyContent = "center";
    divOsoba.style.alignItems = "center";
    divOsoba.style.flexDirection = "column";
    divOsoba.style.padding = "10px"; // ovde smo na div koji drzi osobe dodali padding da bi razmakli slike

    
    var fullNameparagraph = document.createElement("p");  //napravili smo paragraf
    fullNameparagraph.textContent = `${e.name} ${e.surname}`; // ovde nizu dodajemo imena i prezimena 
    
    if (e.sex === "female"){
        fullNameparagraph.style.color = "pink"
    } else {
        fullNameparagraph.style.color = "blue"
    };

   divOsoba.append(fullNameparagraph); // ovde smo povezali div sa osobama sa imenima

   const imageOsoba = document.createElement ("img");
   imageOsoba.setAttribute("src", e.image); //prvo je atribut u slici "src" , drugo je vrednost "value", koji je u ovom trenutku URL slike

   divOsoba.append(imageOsoba); //ovde vezujemo div osoba sa slikama

   const ageParagraph = document.createElement("p");
   ageParagraph.textContent = `Age ${e.age}`;

   divOsoba.append(ageParagraph); //vezujemo div osoba sa godinama
   divWrapper.append(divOsoba); // 
  });
}

mainButton.addEventListener("click", addCardsToDiv) //prva stavka je klik , to znaci da ce na svaki klik da uradi nesto, a callback funkcija je to sto treba da prikaze 
