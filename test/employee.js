// ********************************GOTOV DOMACI**********************


// function Person (name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.speak = function (){
//     console.log(`${this.name}`);
// }

// function Student (name, age, smer, fax) {
//     Person.call(this, name, age) //1.korak
//         this.smer = smer;
//         this.fax = fax;
//     }

// //Ovim smo unistili vezu izmedju Student.prototype.constructor i Student

// Student.prototype=Object.create(Person.prototype);//2.korak

// //Ovako uspostavljamo vezu izmedju konstruktora i konstruktorske funkcije
// Student.prototype.constructor=Student;//3.korak

//  ILI mozemo da spojimo 2. i 3. korak :

// Object.setPrototypeOf(Student.prototype, Person.prototype);

// Student.prototype.reciSmer = function(){
//     console.log(`Studiram ${this.smer} na ${this.fax}u`);
// }

// const osoba = new Person ("Mika", "Mikovic");
// const student = new Student ("Zika", "Zikic", "Agro-ekonomija" , "Gradjevinski fakultet");

// osoba.speak()
// student.speak()
// student.reciSmer()

// console.log(student.__proto__);

function Person(ime, prezime) {
  this.ime = ime;
  this.prezime = prezime;
}

Person.prototype.getFullName = function () {
  console.log(`${this.ime} ${this.prezime}`);
};

const osoba1 = new Person("Milos", "Knezevic");
const osoba2 = new Person("Nemanja", "Rakic");
const osoba3 = new Person("Stefos", "Stefanos");

function Employee(ime, prezime, posao, primanja) {
  Person.call(this, ime, prezime);
  this.posao = posao;
  this.primanja = primanja;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);

// Employee.prototype = Object.create (Person.prototype);
// Employee.prototype.constructor = Employee;

// osoba1.getFullName()

Employee.prototype.getData = function () {
  console.log(
    `Ime radnika je ${this.ime}, prezime ${this.prezime} ,i njegova primanja su ${this.primanja} dinara.`
  );
};

Employee.prototype.getSalary = function () {
  console.log(`${this.primanja}`);
};

Employee.prototype.increaseSalary = function () {
  this.primanja = this.primanja * 1.1;
  console.log(`${this.primanja}`);
};

const radnik1 = new Employee("Nidza", "Dzidza", "vozac", 80000);
const radnik2 = new Employee("luka", "lukic", "liftadzija", 80000);
const radnik3 = new Employee("Marko", "Debeljan", "dostavljac", 1200000);
const radnik4 = new Employee("Butke", "Pirocanac", "neradnik", 0);

// radnik3.increaseSalary()

function Developer(ime, prezime, posao, primanja, specijalizacija) {
  Employee.call(this, ime, prezime, posao, primanja);
  this.specijalizacija = specijalizacija;
}

Object.setPrototypeOf(Developer.prototype, Employee.prototype);

Developer.prototype.getSpecialization = function () {
  console.log(`${this.specijalizacija}`);
};

const developer1 = new Developer(
  "Niki",
  "nikovic",
  "govnar",
  50000,
  "septicki govnar"
);
const developer2 = new Developer(
  "Bogdan",
  "Bigic",
  "mentol",
  42000,
  "bas mentolcina"
);
const developer3 = new Developer(
  "Djordje",
  "Carkic",
  "reper",
  100000,
  "bosancheros"
);

// developer1.getSpecialization()

function Manager(ime, prezime, posao, primanja, specijalizacija, odeljenje) {
  Employee.call(this, ime, prezime, posao, primanja, specijalizacija);
  this.odeljenje = odeljenje;
}

Object.setPrototypeOf(Manager.prototype, Developer.prototype);

Manager.prototype.getDepartment = function () {
  console.log(`Radi u ${this.odeljenje}`);
};

Manager.prototype.changeDepartment = function (novoOdeljenje) {
  this.odeljenje = novoOdeljenje;
  console.log(`${this.odeljenje}`);
};

const manager1 = new Manager(
  "Gile",
  "Sampionovic",
  "Microsoft",
  32000,
  "tech mag",
  "customer service"
);
const manager2 = new Manager(
  "Somi",
  "Debilkovic",
  "KGB",
  52000,
  "kompjuteras",
  "KGB Vuk"
);
const manager3 = new Manager(
  "Djura",
  "Aksentijevic",
  "Maxi",
  42000,
  "magacinski radnik",
  "magacin"
);

// manager1.changeDepartment("gde god")
// console.log(manager1);

function Applications(ime, licenca, ocena) {
  this.ime = ime;
  this.licenca = licenca;
  this.ocena = ocena;
};

Applications.prototype.isCCLicence = function (){
  if (this.licenca === "Creative Commons") {
    console.log("CC licenca");
  } else {
    console.log(`${this.licenca}`);
  }
};



const app1 = new Applications("tinder", true, 3);
const app2 = new Applications("instagram", true, 4);
const app3 = new Applications("badoo", false, 2);

// console.log(app1.ime);
// console.log(app2.licenca, app3.ocena);

function WebApp(ime, url, tehnologija, licenca, ocena) {
  Applications.call(this, ime, licenca, ocena);
  this.url = url;
  this.tehnologija = tehnologija;
}

Object.setPrototypeOf(WebApp.prototype, Applications.prototype);

WebApp.prototype.getData = function () {
  console.log(
    `${this.ime}, ${this.url}, ${this.tehnologija}, ${this.licenca}, ${this.ocena}`
  );
};

WebApp.prototype.reactBased = function () {
  if (this.tehnologija === "React") {
    console.log("Ova aplikacija koristi React");
  } else {
    console.log(`${this.tehnologija}`);
  }
};


const webapp1 = new WebApp(
  "Slack",
  "Url:auysdgfuasgdfihausdfh",
  "React",
  "Creative Commons",
  5
);
const webapp2 = new WebApp(
  "gitBash",
  "Url:sdasfdgdfgsdgfdds",
  "JavaScript",
  false,
  4
);
const webapp3 = new WebApp(
  "Facebook",
  "Url:nf12ho4ho34h5340",
  "cutting edge",
  "Creative Commons",
  2
);

// webapp1.reactBased()
// webapp3.getData()

function MobileApp(ime, platforma, licenca, ocena) {
 Applications.call(this, ime, licenca, ocena);
  this.platforma = platforma;
}


Object.setPrototypeOf(Applications.prototype, MobileApp.prototype);

MobileApp.prototype.getData = function () {
  console.log(`${this.ime}, ${this.platforma}, ${this.licenca}, ${this.ocena}`);
};

MobileApp.prototype.forAndroid = function () {
  if (this.platforma === "Android") {
    console.log("Namenjeno za Android platformu");
  } else {
    console.log(`${this.platforma}`);
  }
};


MobileApp.prototype.showStars = function (){
  console.log(`${this.ocena}`);
}

MobileApp.prototype.Like = function (){
  this.ocena = this.ocena + 1;
  console.log(`${this.ocena}`);
}

const mobileapp1 = new MobileApp("Instagram", "Android", "Creative Commons", 5);
const mobileapp2 = new MobileApp("TikTok", "IOS", "LeagueOFLegends", 3);
const mobileapp3 = new MobileApp("Tinder", "Android", "Creative Commons", 2);

// mobileapp2.getData();
// console.log(mobileapp2.li);

webapp1.isCCLicence();

