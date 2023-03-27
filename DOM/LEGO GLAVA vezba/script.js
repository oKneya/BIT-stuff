const niz = [
  {
    name: "Jon",
    surname: "Doe",
    age: 33,
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    sex: "male",
    email: "john.doe@example.com",
  },
  {
    name: "Sammy",
    surname: "Smith",
    age: 27,
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    sex: "male",
    email: "sammy.smith@example.com",
  },
  {
    name: "Valentina",
    surname: "Herrera",
    age: 19,
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    sex: "female",
    email: "valentina.herrera@example.com",
  },
  {
    name: "Gabriel",
    surname: "Hessus",
    age: 36,
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    sex: "female",
    email: "gabriel.hessus@example.com",
  },
  {
    name: "Morandi",
    surname: "Breezer",
    age: 32,
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    sex: "male",
    email: "morandi.breezer@example.com",
  },
  {
    name: "Frekni",
    surname: "Sinatra",
    age: 14,
    image: "https://randomuser.me/api/portraits/men/98.jpg",
    sex: "male",
    email: "frenki.sinatra@example.com",
  },
  {
    name: "Bacha",
    surname: "Vergushlar",
    age: 14,
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    sex: "male",
    email: "bacha.vergshlar@example.com",
  },
  {
    name: "Inkae",
    surname: "Himnjagayu",
    age: 14,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    sex: "male",
    email: "inkae.himnjagay@example.com",
  },
];

var images = [
  "https://randomuser.me/api/portraits/lego/1.jpg",
  "https://randomuser.me/api/portraits/lego/2.jpg",
  "https://randomuser.me/api/portraits/lego/3.jpg",
  "https://randomuser.me/api/portraits/lego/4.jpg",
  "https://randomuser.me/api/portraits/lego/5.jpg",
  "https://randomuser.me/api/portraits/lego/6.jpg",
  "https://randomuser.me/api/portraits/lego/7.jpg",
];

const body = document.body;

const divWrapper = document.createElement("div");
divWrapper.style.minHeight = "100%";
divWrapper.style.display = "flex";
divWrapper.style.flexWrap = "wrap";
divWrapper.style.justifyContent = "center";
divWrapper.style.alignItems = "center";
divWrapper.style.textAlign = "center";
divWrapper.style.marginTop = "50px";

body.append(divWrapper);

const mainButton = document.createElement("button");
mainButton.textContent = "Prikazi ljude";
mainButton.style.padding = "15px";
mainButton.style.borderRadius = "20px";
mainButton.style.cursor = "pointer";
mainButton.style.border = "none";
mainButton.style.fontWeight = "700";
mainButton.style.backgroundColor = "aqua";
divWrapper.append(mainButton);

function addCardsToDiv() {
  divWrapper.innerHTML = "";
  niz.forEach((e) => {
    const divOsoba = document.createElement("div");
    divOsoba.style.display = "flex";
    divOsoba.style.justifyContent = "center";
    divOsoba.style.alignItems = "center";
    divOsoba.style.flexDirection = "column";
    divOsoba.style.padding = "10px";
    divOsoba.style.backgroundColor = "white";
    divOsoba.style.margin = "20px";
    divOsoba.style.height = "250px";
    divOsoba.style.width = "250px";
    divOsoba.style.borderRadius = "25px";

    const fullNameParagraph = document.createElement("p");
    fullNameParagraph.textContent = `${e.name} ${e.surname}`;
    divOsoba.append(fullNameParagraph);

    const imageOsobe = document.createElement("img");
    imageOsobe.setAttribute("src", e.image);

    divOsoba.append(imageOsobe);

    const ageParagraph = document.createElement("p");
    ageParagraph.textContent = `Age: ${e.age}`;

    divOsoba.append(ageParagraph);

    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = `Email: ${e.email}`;

    divOsoba.append(emailParagraph);

    divWrapper.append(divOsoba);
  });

  const legoWrapper = document.createElement("div");
  legoWrapper.style.width = "400px";
  legoWrapper.style.height = "350px";
  legoWrapper.style.display = "flex";
  legoWrapper.style.justifyContent = "space-between";
  legoWrapper.style.alignItems = "center";
  legoWrapper.style.margin = "0 auto";

  body.append(legoWrapper);

  const dugmeLevo = document.createElement("button");
  dugmeLevo.style.width = "60px";
  dugmeLevo.style.height = "30px";
  dugmeLevo.textContent = "Prev.";

  legoWrapper.append(dugmeLevo);

  let counter = 0 ;

  dugmeLevo.addEventListener("click", () => {
      counter--; 
      if(counter===-1){
        counter=images.length-1;
      }
      console.log(counter);
      slikaLego.setAttribute("src", images[counter])
  })

  const slikaLego = document.createElement("img");
  slikaLego.setAttribute("src", images[0]);
  slikaLego.style.height = "300px";
  slikaLego.style.borderRadius = "25px";

  legoWrapper.append(slikaLego);

  const dugmeDesno = document.createElement("button");
  dugmeDesno.style.width = "60px";
  dugmeDesno.style.height = "30px";
  dugmeDesno.textContent = "Next";

  legoWrapper.append(dugmeDesno);

  dugmeDesno.addEventListener("click", () => {
    counter++; 
    if (counter===images.length){
        counter=0;
    }
    slikaLego.setAttribute("src", images[counter])
    console.log(counter);
})

function promeniBoju() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  
}

mainButton.addEventListener("click", addCardsToDiv);

