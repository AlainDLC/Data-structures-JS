'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered ${time} at ${adress} `
    );
  },
  orderPasta: function(ing1,ing2,ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}
      and ${ing3}`)
  }
};

/*
restaurant.orderDelivery({
  time: '22.30',
  adress: 'Via del mar',
  mainIndex: 2,
  starterIndex: 0,
});

restaurant.orderDelivery({
  time: '22.30',
  adress: 'Sivilla del 21',
  mainIndex: 1,
  starterIndex: 1,
});
const {
  name: restaurantName,
  location: restaurantLocation,
  openingHours,
} = restaurant;
  
console.log(restaurantName, restaurantLocation, openingHours);

// defult value

const { menu = [], starterMenu: starter = [] } = restaurant;

console.log(menu, starter);

let a = 111;
let b = 222;
let c = 2;

const obj = { a: 23, b: 33, c: [] };

({ a, b } = obj);

console.log(a, b, c);

const {
  fri: { open, close },
} = openingHours;

console.log("open",open, close);
*/
/* des array
let [main, secondary] = restaurant.categories;

console.log(main, secondary);

[main, secondary] = [secondary, main];

console.log(main, secondary);

const [ettan, tvaa] = restaurant.order(2, 0);

console.log(ettan, tvaa);

// destructa i en destructor (multi)

const nested = [2, 4, [5, 6]];

console.log(nested);

//const [i, , j] = nested;

const [i, , [j, k]] = nested;

console.log(i, j, k); */

// des object


const spred = [2,3,4,6,2,1,4];
const addSpredd = ['hej','king', {k:4}, ...spred]
const newMenu = [...restaurant.mainMenu, "Oxfile",'Cheddar',{Grilla: 'Hårt'}]

// kopia av menu
const mainMenyCope = [...newMenu]

const menu = [...restaurant.starterMenu, ...mainMenyCope]

// real world ex
/*const ingredients = [prompt("Let's make pasta! ingredients 1"),
  prompt("ingredients 2"),prompt("ingredients 3")
]
console.log(ingredients)
restaurant.orderPasta(...ingredients)
*/


// Object

/*
const newresturange = {...restaurant, founder : 'KING', founding:'1981'}


const resturangCope = {...restaurant}

resturangCope.name = 'KING PLACE'
console.log(newresturange)
console.log(resturangCope)

*/

















