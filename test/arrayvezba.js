
// *************ARRAY**********

// 1. Write an array of months in a year. Using console.log display June, October and January    
// from the array.

// let a = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sept", "Okt", "Nov", "Dec"];
// let b = [1,4,7,6];
// let c = [];

// b.forEach(i=>c.push(a[i]));
// console.log(c);

// 2. Write an arrays of days in a week. Using console.log display Sunday from the array.

// var daniunedelji = ['pon', 'uto', 'sre', 'cet', 'pet', 'sub', 'ned']
// console.log(daniunedelji[5])

// 3. Print all negative elements from the array [2, -4, 5, -2, -11].

// ***********prvi nacin *********** (filter metod) => Vraca svaki element koji je "true" datom parametru (u ovom slucaju da je element manji od 0)

//  let a = [2, -4, 5, -2, -11];
//  let a2 = a.filter(Element => Element<0);
//  console.log(a2);

//  ************drugi nacin************* (for petlja) => Svaki element prolazi kroz iteraciju , ako je uslov "true" (da je manji od 0 ), printace rezultat u console.log-u.

// let niz = [2, -4, 5, -2, -11];
 
// for (i=0;i<niz.length;i++){
//    if (niz[i]<0) {
//     console.log(niz[i]);
//    }
// };

// console.log();

//  ************* treci nacin ********* ( forEach petlja) => pravi se novi niz u koji ce sadrzati sve negativne elemente prvog niza.
//  Iteracijom ce se, ako je element negativan, dodati u novi niz (a2) koristeci .push metodu.

// let a = [2, -4, 5, -2, -11];
// let a2 = [];

// a.forEach(element => {
//     if (element < 0) {
//         a2.push(element);
//     }
// });

// console.log(a2);

// *********cetvrti nacin ************ (While petlja) => pravi se novi niz u koji ce sadrzati sve negativne elemente prvog niza.
//  Iteracijom ce se, ako je element negativan, dodati u novi niz (a2) koristeci .push metod

// let a = [2, -4, 5, -2, -11];
// let a2 = [];
// let i = 0;

// while (i < a.length) {
//     if (a[i]<0) {
//         a2.push(a[i])
//     }
//     i=i+1;
// }

// console.log(a2);

// *************peti nacin ************** (For Of petlja) => pravi se novi niz u koji ce sadrzati sve negativne elemente prvog niza.
//  Iteracijom ce se, ako je element negativan, dodati u novi niz (a2) koristeci .push metod


// let a = [2, -4, 5, -2, -11];
// let a2 = [];

// for ( const element of a ) {
//     if (element < 0 ) {
//         a2.push(element);
//     }
// }

// console.log(a2);


// 4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
// 72, 14, 9].

// var deljivisatri = [5, 15, -5, 20, 12, 18, 72, 14, 9 ]
// if (deljivisatri[8]%3===0) {
// console.log("deljiv")
// }

// 5. What is the index of number 24 in the following array?
// [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
// 10, 26, 7]];

//  var nizbrojeva = [[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];
//  console.log(nizbrojeva.length)
//  console.log(nizbrojeva [0] [3])
//  console.log(nizbrojeva [2] [1])

// 6. Napisati program koji proverava sumu prvog i poslednjeg
// elementa u nizu, ukoliko je suma 50, dupliraj rezultat.
// Ukoliko je suma veca od 50, pomnozi sumu sa 5.
// Ukoliko je suma manja od 50, rezultat podeli sa 4.

// a = [1,3,5,2,4,6,10]

//   var sumarezultata = [60,3,5,2,4,6,10]
// if (sumarezultata[0]+sumarezultata[sumarezultata.length-1]===50) {
// console.log((sumarezultata[0]+sumarezultata[sumarezultata.length-1])*2)
// } else if (sumarezultata[0]+sumarezultata[6]> 50) {
// console.log((sumarezultata[0]+sumarezultata[sumarezultata.length-1])*5)
// } else if (sumarezultata[0]+sumarezultata[6]< 50) {
// console.log((sumarezultata[0]+sumarezultata[sumarezultata.length-1])/4)
// } ;

/*7. Napisati program koji konkatenira prva dva elemeenta niza.
Prvo treba proveriti da li su elementi "string".
Ukoliko jesu, treba ih sabrati i ispisati u konzoli.
*/

/*a = ["suma", "elemenata", "niza"]

if (typeof a[0]=="string",typeof a[1]==="string",typeof a[2]==="string") {
     console.log((a[0])+(a[1]))
}*/

/*8. Napisati program koji proverava da li je duzina niza neparna.
Ukoliko jeste, smanji duzinu niza na samo prvi element,
Ukoliko nije, pomnozi poslednji element sa 3;

 var a = [1,2,3,4,5,6,7,8,9]
 var b = [2,5,6,7,8,9,0,"deset"]

 if ([a.length]%3===0) {
     console.log(a[0])
 } else if ([a.length]%3==0) {
     console.log(a[8]*3)
 };

if ([b.length]%3==0) {
    console.log(b[0])
} else if ([b.length +1]%3==0) {
    console.log(b[8]*3)
}

9. Napisati program koji proverava da li je duzina niza manja od 3,
Ukoliko jeste dodati 4 elementa na kraj niza(bilo koji tip podatka)
Ukoliko nije pomnoziti drugi i cetvrti element
*/
// a = ["nula", 1, "dva", 3, "cetiri", 5]

// if([a.length]<=3) {
// console.log([a/length +3])
// } else if ([a.length]>=3) {
// console.log(a[1]*a[3])
// }

// console.log(a.length)

// switch_vezbe

// Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. Print output in console.
// For input 1, output should be “Monday”.

// var a = [7,1,17,15,22,33,-1]
// var max = - Infinity
// var min = Infinity

// for (var i=0; i<a.length;i++) {
// if(max<a[i])
// max = a[i]
// if(min>a[i])
// min = a[i]
// }

// var a = [7,1,17,15,22,33,-1]
// (da sve prebacimo u string)

// for(var i=0;i<a.length;i++) {
//  a[i] += "";
//  console.log(a)
// }

// var a = [7,1,17,15,22,33,-1]
//   for(var i=0;i<a.length;i++) {
//  a[i]=a[i]+1
//   }

//   console.log(a)

/* vezbe sreda 15.12.*/

// Write a program that will iterate from 0 to 10 and display squares of numbers.

// var a = [0,1,2,3,4,5,6,7,8,9,10]
// for (var i=0; i<a.length; i++) {
//  a[i]=a[i]*2
// console.log(a)
// }

// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

// var a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//  for ( var i=0; i<=a.length-1; i++ )
// if (a[i]%2==0)
//    { console.log('deljiv')}
//
//   else if (console.log('nijedeljiv'));

//   2. Write a program to sum the multiples of 3 and 5 under 1000.

//   var min1 = a[0];
//   var min2= a[1];
//   var a = [4,3,3,1,2,5]

//   if (min1>min2) {
//     min1 =a[1];
//     min2 =a[0];
//   }

//   for (var i =2; i<a.length;i++) {
//       if (a[i]<min1) {
//         min2 = min1;
//         min1 = a[i]
//       } else if (a[i] < min2) {
//         min2 =a[i];
//       }
//   }

//   console.log(min1,min2)

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// 15.02.2023

// 1. Write a loop that logs the numbers from 1 to 10 to the console.

// for (var i=1; i<=10;i++) {
//     console.log(i)
// }

// FUNKCIJE 16.02. ****************************************

// var a = 1;                            //<-- vrednost koja stoji van bloka koda se ne racuna u bloku koda
// function korenBroja (funkcija){       //<-- ovo je "function declaration"
//     return Math.sqrt(a());            //<-- ovo je "function expresion"
// }
// function napisiBroj (a){
//     return 3;
// }
// console.log(korenBroja(napisiBroj(a)))

// 1. Write a program that calculates the maximum of two given numbers.

// maximumDvaBroja = function (broj1,broj2) {
//     if (broj1+broj2)
//     console.log(broj1+broj2);
// }

// maximumDvaBroja (15,12)

// 2. Write a program that checks if a given number is odd.

// var daLiJeNeparan = function (nekibroj) {
//     if (nekibroj%2===0)
//     return 'deljivje'
//     return 'nijedeljiv'
// };

// console.log(daLiJeNeparan(11));

// 3. Write a program that checks if a given number is a three digit long number.

// var proveriTrocifreniBroj = function (trocifreni) {
//     if (trocifreni>=1000)
//     return 'ima4cifre';
//     else if (trocifreni>=100)
//     return 'ima3cifre';
//     else if (trocifreni<100)
//     return 'nijetrocifreni'
// };

// console.log(proveriTrocifreniBroj(125))

// 4. Write a program that calculates an arithmetic mean of four numbers.

// var rezultat4broja = function (br1, br2, br3, br4) {
//     return ((br1 +br2 +br3 +br4) / 4)
// };

// console.log(rezultat4broja(2,4,6,8));

// 7. Write a program that calculates a number of digits of a given number.

// function saberibrojeve (nekibroj) {
//     nekibroj+="";
//     return nekibroj.length;
// }

// console.log(saberibrojeve(1122336654546546));

// 9. Write a program that calculates the sum of odd elements of a given array.

// var a = [2, 4, 7, 8, 7, 7, 1];
// function saberiNeparneBr(niz) {
//   var sum = 0;
//   for (var i = 0; i <= niz.length - 1; i++) {
//     if (niz[i] % 2 !== 0) {
//       sum = sum + niz[i];
//     }
     
//   } return sum;
// }
// console.log(saberiNeparneBr(a));

// 8. Write a program that calculates a number of appearances of a given number in a
// given array.


// var a = [2, 4, 7, 8, 7, 7, 1];
// var e = 7
// function appearance (x,y){
//     var counter = 0;
//     for (var i =0; i<x.length; i++) {
//         if (x[i===y])
//         counter=counter+1;                                   
//     }

//     return counter;
// }

// console.log(appearance (a,e))

//VEZBE 17.02. ***************************** FUNKCIJE*/************** */

// 1. Write a function to check whether the `input` is a string or not.

// var a = ""
// var stringiliNe = function (nekiinfo) {
//     if (typeof nekiinfo==typeof a) 
//     return true;
//     return false;
// }
// console.log(stringiliNe(12));

// 2. Write a function to check whether a string is blank or not.


// var BlenkIliNe = function (nekiinfo) {
//     for (var i =0; i<nekiinfo.length; i++) {
//         if (nekiinfo[i]>=0)
//         return false;
//     }  return true;
// }

// console.log(BlenkIliNe(""))

// 11. Write a program that concatenates a given string given number of times. For
// example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

// var a = "abc";
// var b = 5;

// var Konkatenacija = function (a,b) {
//     var c = "" ;
//     for (i=1; i<=b; i++) {
//         if (i<=b) 
//         c = c + a; 
//     } return c;
// }  

// console.log(Konkatenacija(a,b ));

// 3. Write a function that concatenates a given string n times (default is 1).

// var SaberiString = function (string ,puta ) {
//     var novistring = "";
//     for (var i=1; i<=puta;i++) {
//         if (i<=puta)
//         novistring = novistring + string;
//     } return novistring;
// } ;

// console.log(SaberiString("123",3))

// 4. Write a function to count the number of letter occurrences in a string.

// var prebrojslova = function (string, slovo) {
//     var pomnozi = 0;
//     for (var i=0;i<string.length;i++) {
//         if (string[i]===slovo)
//         pomnozi = pomnozi +1;
//     } return pomnozi;
// }
// console.log(prebrojslova("samouseiusvojekljuse", "e"));

// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1




// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.


// var array = ["1","31",undefined,"42","1e+3", Infinity];

// function arrStringstoArrNum (arr) {
//     newArr = []; {
//         for (i=0; i <arr.length; i++) {
//             if (arr[i]!== null && arr[i] !== false && arr[i] !== "" && typeof (arr[i]*1) === "number" && arr[i] *1 < Infinity && arr[i]*1 > -Infinity) {
//                 newArr [newArr.length] = parseFloat (arr[i]);
//             }
//         }
//     } return newArr;
// };
// console.log(arrStringstoArrNum(array));

// dasdasdlasdnkmlaskdmklsdmlksm

// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.


// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

//  var string = "BiloStaDaPisemoDDalostabratemojoe"
 
//  function brojac (a) {
//     var brojac = 0;
//     for (var i=0; i<a.length; i++) {
//         if (a[i].toLowerCase()==="a" || a[i].toLowerCase()==="e" || a[i].toLowerCase()==="i" || a[i].toLowerCase()==="o" || a[i].toLowerCase()==="u")
//         brojac++;
//     } return brojac;
//  }

//  console.log(brojac(string));

// 2. Write a function that combines two arrays by alternatingly taking elements.

// var a = ["a", "b" ,"c"];
// var b = [1,2,3];

// function spojitiArejeve (a,b) { 
//     var c = [];
//     for (var i=0; i<a.length; i++) {
//         c[c.length]=a[i];
//         c[c.length]=b[i];
//     } return c;
//  }

//  console.log(spojitiArejeve(a,b));

// 4.Write a function that takes a number and returns array of its digits.

// var broj = 12345;
// function konvertBrojUString(broj) {
//     return Array.from(String(broj), Number);
//   }

// var brojArej = konvertBrojUString(broj);
// console.log(brojArej); 

// 5.Write a program that prints a multiplication table for numbers up to 12.

// for (var i = 1; i<=12;i=i+1) {
//     for (var j = 1; j<=12; j=j+1) {
//        console.log(i + "*" + j + "=" + i * j );
//     }
// } ;


// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

// var C = 50;
// var F = 0;
// var CLSuFRH = function ( C ) {
//     if ( F =(9/5)*C + 32) {
//      console.log(F);
        
//     }
// };
// CLSuFRH(120)
// ;

// week 4 ************************ OBJECTS

// var pas = {
//     rasa:"doberman",
//     godiste: 1922,
//     deca:["paja","raja","vlaja", "baja"],
//     aktivan: true,
//     ime: "Hans",
//     noviObj:{
//         mestoBoravka: "Titel",
//         imeVlasnika: "Zarko",
//         prezime: "Vlatek"
//     },
//     laj: function(){
//         console.log("avav");
//     },
//     kaziIme: function(){
//         return pas.ime;
//     },
//     promeniIme: function(novoIme){
//        pas.ime = novoIme;
//     }
// };

// pas.boja = "crn";

// console.log(delete pas.boja);
// console.log(pas.boja);
// console.log(pas)

// // console.log(pas.aktivan, pas.noviObj.imeVlasnika)           

// console.log(pas.kaziIme());
// pas.promeniIme("Shulc");
// console.log(pas.ime)
// console.log(pas.kaziIme())
// pas.promeniIme("Djoka");
// console.log(pas.ime)


// var a = { ime : "milos", prezime : "knezevic",
// }
// var b = { broj:12, drugiBroj:15}

// var cats = {a,b}

// console.log(Object.keys(a.prezime))

// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

// var kafa = {
//     imeKafe: "Arabika",
//     snaga: "10+",
//     ukus: "vanila",
//     miris: "lavanda",
//     mleko: false,
//     sugar: true,
//     boja: "crna",

//     opisiKafu: function(){
//         return `Kafa je ${kafa.imeKafe} i ona ima ${kafa.snaga} jacinu ukusa sa mirisom ${kafa.miris} `;
//     },

//     reciUkus: function(){
//         return kafa.ukus;
//     },

//     promeniUkus: function(noviUkus){
//        kafa.ukus = noviUkus;
//     }
// };

// console.log(kafa.opisiKafu())

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

//  var omiljeniFilm = {
//     imefilma : "Star Wars",
//     director: "George Lucas",
//     godine : [1977, 1980, 1983, 1999,2002, 2005, 2015, 2016,2017,2018,2020,2022],
//     sequels : true,
//     prequels : true,
//     glumci: ["Hayden Christensen", "Ewan McGregor", "Natalie Portman", "Ian McDiarmid", "Christopher Lee" ],
//     genre: "SCI-FI",
//     delovi: 12,
//  };

//  console.log(omiljeniFilm.director, omiljeniFilm.glumci)

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the projects
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

// function createProject(description, language, repository, inDevelopment) {
//   return {
//     description: description,
//     language: language,
//     repository: repository,
//     inDevelopment: inDevelopment,
//     printRepository: function() {
//       console.log("Repository: " + this.repository);
//     },
//     isJavaScriptProject: function() {
//       return this.language === "JavaScript";
//     },
//     isInDevelopment: function() {
//       return this.inDevelopment;
//     }
//   };
// }
// var myProject = createProject("My awesome project", "JavaScript", "https://github.com/myusername/myproject", true);
// myProject.printRepository(); // prints "Repository: https://github.com/myusername/myproject"
// console.log(myProject.isJavaScriptProject()); // prints true
// console.log(myProject.isInDevelopment()); // prints true

// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

// function makeRecipe(name,type, complexity,listing, prepTime, prepInst){



// var recept = {
//      ime:name,
//      tip: type,
//      tezina: complexity,
//      lista: listing,
//      vreme : prepTime,
//      instr: prepInst,
     
//      sastojci: function(){
//         console.log(recept.lista)
//      },

//      vreme: function(){
//         return recept.vreme > 15 ? "dugo se sprema":"ide brzo"
//      },
    
//      tipKuhinje: function(noviTip){
//        recept.tip = noviTip
//      },
//     brisiSast: function(nemaSast){
//         recept.lista=recept.lista.filter(function(item))
//         return item !== nemaSast
//     },
//     };

// }

// OBJEKTI VEZBA //************************************************    1.3.2023    */
 
// 1. Create a modernCalculator function that creates objects with 17 methods, and takes 3 numbers as parameter inputs:

// 1) sum() returns the sum of these properties.
// 2) mul() returns the multiplication product of these properties.
// 3) div() returns the result after division
// 4) sub() returns the result after subtraction
// 5) sqrt() returns the square root of one of the numbers
// 6) pow() returns the result of a to the power of b
// 7) changeA() change the number a
// 8) changeB() change the number b
// 9) changeC() change the number c
// 10) quadraticFormula() returns the result after using the quadratic formula
// 11) makeArray() returns an Array of arguments
// 12) isEven() returns true if all the arguments are even, else returns false
// 13) isPrime() returns true if all the arguments are prime numbers, else false
// 14) convertToString() returns concatenated string of all the arguments with "+" in between
// 15) sumAndMultiply() returns the result after adding the arguments together and multiplying that result by 123
// 16) reverseTheNumber() returns reversed number after calling sumAndMultiply() function
// 17) createNewProperty() create a new key: value property, fourth number


// function modernCalc( prvibr, drugibr, trecibr){
//     var rezultat = {
//        rezPrvibr: prvibr,
//         rezDrugibr: drugibr,
//         rezTrecibr: trecibr,

//         sabiranje: function (){
//             rezultat = (this.rezPrvibr+this.rezDrugibr+this.rezTrecibr)
//             return rezultat
//         },

//         mnozenje: function (){
//             rezultat = (this.rezPrvibr*this.rezDrugibr*this.rezTrecibr)
//             return rezultat
//         },

//         deljenje: function (){
//             rezultat = (this.rezPrvibr/this.rezDrugibr/this.rezTrecibr)
//             return rezultat
//         },

//         oduzimanje: function (){
//             rezultat = (this.rezPrvibr-this.rezDrugibr-this.rezTrecibr)
//             return rezultat
//         },

//         koren: function (){
//             rezultat=(Math.sqrt(drugibr))
//             return rezultat
//         },

//          kvadriranje: function (){
//            var rezultat = (Math.pow(this.rezPrvibr,this.rezDrugibr))
//             return rezultat
//          },

//          promenaBr1: function (noviBr1){
//             rezultat.rezPrvibr= noviBr1
//          },

//          promenaBr2: function (noviBr2){
//             rezultat.rezDrugibr= noviBr2
//          },

//          promenaBr3: function (noviBr3){
//             rezultat.rezTrecibr= noviBr3
//         },

//          racunica: function (){
//             var discriminant = this.rezDrugibr * this.rezDrugibr - 4 * this.rezPrvibr * this.rezTrecibr;
//             if (discriminant<0){
//                 console.log("nema resenja");
//             } else if (discriminant===0) {
//                 var resenje1 = -this.rezDrugibr / (2*this.rezPrvibr);
//                 console.log("postoji resenje" + resenje1);
//             } else {
//                 var resenje1 = (-this.rezDrugibr + Math.sqrt(discriminant)) / (2 * this.rezPrvibr);
//                 var resenje2 = (-this.rezDrugibr + Math.sqrt(discriminant)) / (2 * this.rezPrvibr);
//                 console.log("postoje dva resenja" + resenje1 + "i ovo" +resenje2)
//             }
//          },
//            napraviArej: function(){
//             return Array.from(modernCalc);
//          },

//            parniBrojevi: function(){
//             if (this.rezPrvibr%2===0 && this.rezDrugibr%2===0 && this.rezTrecibr%2===0){
//                 return true;
//             } else {
//                 return false;
//             };
//            },

//            neparniBrojevi: function (){
//             if (this.rezPrvibr%3===0 && this.rezDrugibr%3===0 && this.rezTrecibr%3===0){
//                 return true;
//             } else {
//                 return false;
//             };
//            },

//            string: function(){
//             var strng = ""
//             return strng + this.rezPrvibr + this.rezDrugibr+this.rezTrecibr
//            },

//            saberiIpomnozi: function(){
//             rezultat = (this.rezPrvibr+this.rezDrugibr+this.rezPrvibr) * 123;
//             return rezultat;
//            },

//            reverse: function(){
//             rezultat = (this.rezPrvibr+this.rezDrugibr+this.rezPrvibr) * 123;
//             return rezultat.toString().split("").reverse().join("");
//            },

//            noviKey: function( key, newNum){
//               rezultat[key] = newNum;
//            },
//     }
//     return rezultat;
// };

// var  noveBrojke = modernCalc(4, 8 ,3
//     );
// console.log(noveBrojke.oduzimanje())

// function Osoba(ime, prezime, godiste, bojaOciju, visina, tezina, bojaKose, pol ) { 

//     this.ime=ime,
//     this.prezime=prezime,
//     this.godiste=godiste,
//     this.bojaOciju=bojaOciju,
//     this.visina=visina,
//     this.tezina=tezina,
//     this.bojaKose=bojaKose,
//     this.pol=pol;

//     this.kakoSeZovemIPrezivam = function (){
//         return `${this.ime} ${this.prezime}`
//     }
//     this.promeniIme = function(ime){
//         this.ime = ime;
//     }
//     this.reciIme = function(){
//         return this.ime;
//     }
// }

// var zarko = new Osoba("zarko", "Lausevic", 1948, "plava",205,96,"smedja", "MUZJAK");
// var popaj = new Osoba ("popaj", "mornar", 1800, "plava" , 160, 70, "celav", "muski");
// console.log(popaj.ime);

// zarko.promeniIme("Radisa")
// console.log(zarko.ime);
// console.log(zarko.reciIme())

// console.log(zarko instanceof Osoba)
// console.log(popaj instanceof Osoba)

// class Calculator {
//     constructor (a,b,c){
//         this.a=a,
//         this.b=b,
//         this.c=c,
//     }

//     kakoSeZovemIPrezivam
// }

//OBJEKTI 2.3.2023//******************************************* */

// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

//    var a = [2, 4, 7, 11, -2, 1];
//    var b = [];
  
//    a.forEach(function(broj){
//      b.push(broj);
//      b.push(broj);
//    });
//    console.log(b);


//    2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

// var a =[8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// var b = [];
//  a.forEach(function(broj){
//    if (!b.includes(broj)) {
//     b.push(broj);
//    };
//  });

//  console.log(b);

// function removeDuplicates(inputArray) {
//     var resultArray= [];
//     var workingArray = inputArray.slice().sort();
//      workingArray.forEach(function(element,indeks, niz){
//       var nextElem = niz[indeks + 1];
//       if (element !== nextElem){
//         resultArray.push(element)
//       }
//      })
//      return resultArray;
// } 
//     console.log(removeDuplicates(1,1,2,3,4,5,1,2,5,3));
    

// const obj = {
//     y:5,
//     a:"str",
//     c:false,
//     m() {
//     console.log(this.y)
//     }
// };

// let {y, m} = obj;
// m()
// y = 15;
// console.log(y, obj.y)


// 4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
//     72, 14, 9].

// 1. For Of petlja :

// let a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
// let a2 = [];
// for (const element of a ) {
//     if (element%3===0) {
//         a2.push(element)
//     }
// }

// console.log(a2);

// 2. For petlja :

// let a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
// let a2 = [];
// for (let i=0;i<a.length;i++){
//     if (a[i]%3===0){
//         a2.push(a[i]);
//     }
// };

// console.log(a2);

// 3. While petlja :

// let a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
// let a2 = [];
// let i = 0;
//  while (i < a.length) {
//     if (a[i]%3===0) {
//         a2.push(a[i])
//     }
//     i=i+1;
//  };

//  console.log(a2);

