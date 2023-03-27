// Arrays of possible values for each property
const names = [
  "John",
  "Emily",
  "Michael",
  "Jessica",
  "David",
  "Sarah",
  "Brian",
  "Olivia",
  "Daniel",
  "Elizabeth",
  "Jacob",
  "Avery",
  "William",
  "Sophia",
  "Lucas",
  "Grace",
  "Ethan",
  "Chloe",
  "Benjamin",
  "Mia",
];
const surnames = [
  "Smith",
  "Johnson",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Moore",
  "Young",
  "Allen",
];
const nicknames = [
  "Ace",
  "Buddy",
  "Champ",
  "Duke",
  "Flash",
  "Guru",
  "Hawk",
  "Jazz",
  "Knight",
  "Lucky",
  "Maverick",
  "Ninja",
  "Pilot",
  "Rocket",
  "Savage",
  "Tiger",
  "Viper",
  "Wizard",
  "Ziggy",
  "Zeus",
];
const jobs = [
  "Software Developer",
  "Teacher",
  "Nurse",
  "Doctor",
  "Engineer",
  "Lawyer",
  "Chef",
  "Accountant",
  "Artist",
  "Journalist",
  "Athlete",
  "Scientist",
  "Entrepreneur",
  "Salesperson",
  "Marketing Manager",
  "HR Manager",
  "Financial Analyst",
  "Consultant",
  "Graphic Designer",
  "Writer",
];
const kidCounts = [0, 1, 2, 3, 4];
const images = [
  "https://i.pinimg.com/236x/e0/ed/cc/e0edcc16d54c2baeca77f4791cb4e82f.jpg",
  "https://i.pinimg.com/564x/dc/2c/66/dc2c66d38db2aceb27056672046deeb1.jpg",
  "https://i.pinimg.com/564x/df/f2/9b/dff29bbc491da2f6652196f5f8367d71.jpg",
  "https://i.pinimg.com/564x/be/aa/38/beaa38eebb69d79b33af3333d33651fe.jpg",
  "https://i.pinimg.com/564x/9d/b9/07/9db907536c523c2490b1a415f3d31d9f.jpg",
  "https://i.pinimg.com/564x/04/a1/e4/04a1e44334d0e22d73bfd6320fc61634.jpg",
  "https://i.pinimg.com/564x/24/5d/56/245d5660d9e92a7ba6466e9a8cd315b7.jpg",
  "https://i.pinimg.com/564x/e4/06/5e/e4065e894d2573adffbd2194895fc653.jpg",
  "https://i.pinimg.com/564x/b7/91/88/b79188c98ab220a47f475933b63aa3a0.jpg",
  "https://i.pinimg.com/564x/61/1a/32/611a3246f646791b3727ee5e9e6545c0.jpg",
  "https://i.pinimg.com/564x/b3/ac/6d/b3ac6d89a136afa36e6066ad79f5a110.jpg",
  "https://i.pinimg.com/564x/0b/20/20/0b20205d47f7f6fbcdce00634e10a75d.jpg",
  "https://i.pinimg.com/564x/64/44/a7/6444a71ee22ce90efe57387edf2adacc.jpg",
  "https://i.pinimg.com/564x/d8/e0/c7/d8e0c703b3f8f25641b00d2b3b33e1a0.jpg",
  "https://i.pinimg.com/564x/24/7b/66/247b66ba5a3b9d2e35b90cd8809b4a17.jpg",
  "https://i.pinimg.com/736x/d4/65/fc/d465fc89177e970380fa03844b0b453d.jpg",
  "https://i.pinimg.com/736x/52/04/0f/52040f7a857ee5c7178a9f186d906c98.jpg",
  "https://i.pinimg.com/564x/0c/27/34/0c2734cbe5a42b09e3d76d7797ed46b0.jpg",
  "https://i.pinimg.com/564x/54/8e/f1/548ef16ed421880547ea4829b2958c65.jpg",
];

// Generate 20 random person array of objects
function generate20RandomPersonsArray() {
  const people = [];
  for (let i = 0; i < 20; i++) {
    const id = i + 1;
    const name = names[Math.floor(Math.random() * names.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    const age = Math.floor(Math.random() * 47) + 18;
    const nickname = nicknames[Math.floor(Math.random() * nicknames.length)];
    const jobTitle = jobs[Math.floor(Math.random() * jobs.length)];
    const companyName = `Company ${Math.floor(Math.random() * 5) + 1}`;
    const salary = Math.floor(Math.random() * 70001) + 30000;
    const kidCount = kidCounts[Math.floor(Math.random() * kidCounts.length)];
    const image = images[Math.floor(Math.random() * images.length)];
    const kids = [];
    for (let j = 0; j < kidCount; j++) {
      kids.push({
        name: names[Math.floor(Math.random() * names.length)],
        age: Math.floor(Math.random() * 18) + 1,
      });
    }
    const person = {
      id,
      name,
      surname,
      age,
      nickname,
      job_info: {
        title: jobTitle,
        company: companyName,
        salary,
      },
      kids,
      image,
    };
    people.push(person);
  }
  return people;
}

const persons = generate20RandomPersonsArray();
console.log(persons);

const main = document.querySelector("main");
const login = document.querySelector(".loginbtn");
const body = document.body;
const slika999 = document.querySelector(".slikica");

login.addEventListener("click", () => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("mainDivStyle");
  slika999.style.display = "none";
  main.append(mainDiv);

  const title = document.createElement("h3");
  title.textContent = "About";
  title.style.textAlign = "center";
  title.style.paddingTop = "70px";
  main.prepend(title);

  persons.forEach((element) => {
    const peopleCards = document.createElement("div");
    peopleCards.classList.add("cardsDiv");
    peopleCards.style.display = "flex";
    peopleCards.style.justifyContent = "center";
    peopleCards.style.alignItems = "center";
    peopleCards.style.flexDirection = "column";
    peopleCards.style.padding = "20px";
    peopleCards.style.width = "395px"
    mainDiv.append(peopleCards);

    const fullName = document.createElement("h3");
    fullName.style.textAlign = "center";
    fullName.paddingBottom = "10px";
    fullName.textContent = `${element.name} ${element.surname}`;
    peopleCards.append(fullName);

    const addImage = document.createElement("img");
    addImage.classList.add("cardsImage");
    addImage.setAttribute("src", element.image);
    peopleCards.append(addImage);

    const jobTitle = document.createElement("p");
    jobTitle.textContent = element.job_info.title;
    jobTitle.style.textAlign = "center";
    jobTitle.style.paddingTop = "15px";
    peopleCards.append(jobTitle);

   peopleCards.addEventListener("click", () => {
    sessionStorage.setItem("clickedPerson", JSON.stringify(element));
    window.location.href = "jednaOsoba.html";
   })
  });
});
