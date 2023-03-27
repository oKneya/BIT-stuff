"use strict";

(function () {

  function Person(ime, prezime) {
    this.name = ime;
    this.surname = prezime;

    this.getData = function () {
      return `${this.name} ${this.surname}`;
    };
  }
  function Seat(broj, kategorija) {
    if (broj === undefined) {
      broj = Math.round(10 + Math.random() * 90);
    }
    this.number = broj;
    if (kategorija === undefined || kategorija !== "b") {
      this.category = "e";
    }
    else {
      this.category = kategorija;
    }
    this.getData = function () {
      return `${this.number}, ${this.category.toUpperCase()}`;
    };
  }
  function Passenger(osoba, sediste) {
    if (osoba instanceof Person) {
      this.person = osoba;
    }
    if (sediste instanceof Seat) {
      this.seat = sediste;
    }
    this.getData = function () {
      return `${this.seat.getData()} ${this.person.getData()}`;
    };
  }
  function Flight(destinacija, datum) {
    this.relation = destinacija;
    this.date = datum;
    this.listOfPassengers = [];
    this.addPassenger = function (passenger) {
      var isFree = true;
      for (var i = 0; i < this.listOfPassengers.length; i++) {
        if (passenger.seat.number === this.listOfPassengers[i].seat.number) {
          isFree = false;
          console.log("That seat is not available!");
        }
      }
      if (isFree && this.listOfPassengers.length < 100 && passenger instanceof Passenger){
        this.listOfPassengers.push(passenger);
      }
      // ovo je bez extra dela
      // if(passenger instanceof Passenger){
      //   this.listOfPassengers.push(passenger);
      // }
    };
    this.getData = function () {
      var newStr = "";
      for (var i = 0; i < this.listOfPassengers.length; i++) {
        newStr += `     ${
          this.listOfPassengers[i].seat.number
        }, ${this.listOfPassengers[i].seat.category.toUpperCase()}, ${
          this.listOfPassengers[i].person.name
        } ${this.listOfPassengers[i].person.surname} 
      `;
      }
      return `${this.date}, ${this.relation}
      ${newStr}`;
    };
    this.totalPassengers = function () {
      return this.listOfPassengers.length;
    };
  }
  function Airport() {
    this.name = "Juba International Airport";
    this.listOfFlights = [];
    this.addFlight = function (flight) {
      if(flight instanceof Flight){
        this.listOfFlights[this.listOfFlights.length] = flight;
      }
    };
    this.getData = function () {
      var counter = 0;
      var newStr = "";

      this.listOfFlights.forEach(
        (flight) => (counter += flight.totalPassengers())
      );
      this.listOfFlights.forEach((fl) => (newStr += fl.getData()));

      return `Airport: ${this.name}, total passengers: ${counter}
      ${newStr}`;
    };
    // this.totalPassengers = function () {
    //   var counter = 0;
    //   for (var i = 0; i < this.listOfFlights.length; i++) {
    //     counter += this.listOfFlights[i].totalPassengers();
    //   }
    //   return counter;
    // };
  }

  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  function createPassenger(firstName, lastName, seatNum, category) {
    return new Passenger(
      new Person(firstName, lastName),
      new Seat(seatNum, category)
    );
  }
  // vazduplohov mi treba da bih imao letove
  var myAirport = new Airport();

  // letovi mi trebaju jer mi trebaju putnici
  var flight1 = createFlight("Belgrade - New York", "Mar 7 2023");
  var flight2 = createFlight("Barcelona - Belgrade", "May 11 2023");
  var flight3 = createFlight("Easter Island - Kyiev", "August 14 2023");
  var flight4 = createFlight("Baghdad - Hobbiton", "April 28 2024");

  // putnici mi trebaju da bih ih dodao na let
  var passenger1 = createPassenger("Missandei", "Slave", 1, "b");
  var passenger2 = createPassenger("Cercei", "Lanister", 2, "b");
  var passenger3 = createPassenger("Daenerys", "Targeryen", 14, "b");
  var passenger4 = createPassenger("Tyrion", "Lanister");
  var passenger5 = createPassenger("Martin", "Potkonjak", 3);
  var passenger6 = createPassenger("Hajduk Veljko", "Petrovic", 6, "b");
  var passenger7 = createPassenger("Jovanka", "Orleanka");
  var passenger8 = createPassenger("David", "Guetta", 13, "e");
  var passenger9 = createPassenger("Franklin", "Roosvelt", 15, "e");

  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);
  flight1.addPassenger(passenger5);
  flight1.addPassenger(passenger8);
  flight1.addPassenger(passenger9);

  flight2.addPassenger(passenger3);
  flight2.addPassenger(passenger4);

  flight3.addPassenger(passenger5);
  flight3.addPassenger(passenger6);
  flight3.addPassenger(passenger7);

  flight4.addPassenger(passenger9);
  flight4.addPassenger(passenger3);
  flight4.addPassenger(passenger5);

  myAirport.addFlight(flight1);
  myAirport.addFlight(flight2);
  myAirport.addFlight(flight3);
  myAirport.addFlight(flight4);
  // kraj zadatka
  console.log(myAirport.getData());
})();
