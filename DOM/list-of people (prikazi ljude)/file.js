const niz = [
  {
    name: "Jon",
    surname: "Doe",
    age: 33,
    dog: false,
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    sex: "male",
  },
  {
    name: "Sammy",
    surname: "Smith",
    age: 27,
    dog: false,
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    sex: "male",
  },
  {
    name: "Valentina",
    surname: "Herrera",
    age: 19,
    dog: true,
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    sex: "female",
  },
  {
    name: "Gabriel",
    surname: "Hessus",
    age: 36,
    dog: true,
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    sex: "female",
  },
  {
    name: "Morandi",
    surname: "Breezer",
    age: 32,
    dog: false,
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    sex: "male",
  },
  {
    name: "Abhu",
    surname: "Vassar",
    age: 14,
    dog: true,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    sex: "male",
  },
];

const body = document.body;
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.minHeight = "100vh";

const divWrapper = document.createElement("div");
divWrapper.style.minHeight = "100%";
divWrapper.style.display = "flex";
divWrapper.style.justifyContent = "center";
divWrapper.style.alignItems = "center";

body.prepend(divWrapper);

const mainButton = document.createElement("button");
mainButton.textContent = "Prikazi ljude";
mainButton.style.padding = "15px";
mainButton.style.borderRadius = "20px";
mainButton.style.cursor = "pointer";
mainButton.style.border = "none";
mainButton.style.fontWeight = "700";
mainButton.style.backgroundColor = "aqua";
body.prepend(mainButton);

function addCardsToDiv() {
  divWrapper.innerHTML = "";
  niz.forEach((e) => {
    const divOsoba = document.createElement("div");
    divOsoba.style.display = "flex";
    divOsoba.style.justifyContent = "center";
    divOsoba.style.alignItems = "center";
    divOsoba.style.flexDirection = "column";
    divOsoba.style.padding = "10px";

    // if (e.sex === "male") {
    //   divOsoba.style.color = "blue";
    // } else {
    //   divOsoba.style.color = "red";
    // }

    const fullNameParagraph = document.createElement("p");
    fullNameParagraph.textContent = `${e.name} ${e.surname}`;

    if (e.sex === "male") {
      fullNameParagraph.style.color = "blue";
    } else {
      fullNameParagraph.style.color = "red";
    }

    divOsoba.append(fullNameParagraph);

    const imageOsobe = document.createElement("img");
    imageOsobe.setAttribute("src", e.image);

    divOsoba.append(imageOsobe);

    const ageParagraph = document.createElement("p");
    ageParagraph.textContent = `Age: ${e.age}`;

    divOsoba.append(ageParagraph);

    divWrapper.append(divOsoba);
  });
}

mainButton.addEventListener("click", addCardsToDiv);
