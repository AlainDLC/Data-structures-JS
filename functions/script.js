"use strict";

/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirsteWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

// higher order
const transFormed = function (str, fn) {
  console.log(`Origenal string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transFormed("JavaScript is the best!", oneWord);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHi = greet('HI')

greeterHi('king')
greet('Shoo')('Alain')

const grettArrow = greeting => name =>  console.log(`${greeting} ${name}`);

grettArrow('dU ÄR BÄST')('kungen')*/

const luftHansa = {
  airplane: "Luftahansa",
  iataCode: "LH",
  bookning: [],

  book(flightNuim, name) {
    console.log(`${name} booked at seat on ${this.airplane}
    flight ${this.iataCode} ${flightNuim}`);

    this.bookning.push({ flight: ` ${this.iataCode} ${flightNuim} ${name}` });
  },
};

luftHansa.book(354, "KUNG ALAIN");
luftHansa.book(223, "KUNG LEON");
console.log(luftHansa);

const lanChile = {
    airplane: "lanChile",
    iataCode: "CH",
    bookning: [],
}

// funkar inte blir en vanlig funktion anrop undufine

const book = luftHansa.book;

// här pekar vi tikll en annan objeckt och nu funkar det 
book.call(lanChile , 699, 'Bruna')
book.call(lanChile , 324, 'Silva')

console.log(lanChile)
book.call(luftHansa , 324, 'Fanny')
console.log(luftHansa);

// använd inte apply

const flightData = [583, 'Candy'];
// book.apply(lanChile,flightData)



// använd spredd för att få ut data istället
book.call(lanChile,...flightData)

console.log(lanChile)