'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const veckodagar = [
  'Måndag',
  'Tisdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lördag',
  'Söndag',
];

const openingHours = {
  [veckodagar[0]]: {
    open: 12,
    close: 22,
  },
  [veckodagar[4]]: {
    open: 11,
    close: 23,
  },
  [veckodagar[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(openingHours);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered ${time} at ${adress} `
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}
      and ${ing3}`);
  },
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

const menyer = [...restaurant.starterMenu, ...restaurant.mainMenu];

// destructa loppen
/*
for (const [index, element] of menyer.entries()) {
  console.log(`${index + 1} Bara att väja ${element}`);
}
*/
const dagar = [
  'Måndag',
  'Tisdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lördag',
  'Söndag',
];

/*
for (const day of dagar) {
  const open = restaurant.openingHours?.[day]?.open ?? 'Stängt';

  console.log(`${day} Välkommen  ${open}`);
}
*/
// properti name
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} dayz: `;

for (const dagar of properties) {
  openStr += `${dagar}, `;
}
console.log(openStr);

const value = Object.values(openingHours);

console.log(value);

// anerslunda hur man loppar i object
const entries = Object.entries(openingHours);

for (const [key, { today: open, close }] of entries ?? 0) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

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

const spred = [2, 3, 4, 6, 2, 1, 4];
const addSpredd = ['hej', 'king', { k: 4 }, ...spred];
const newMenu = [
  ...restaurant.mainMenu,
  'Oxfile',
  'Cheddar',
  { Grilla: 'Hårt' },
];

// kopia av menu
const mainMenyCope = [...newMenu];

const menu = [...restaurant.starterMenu, ...mainMenyCope];

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

const [Focaccia, ...other] = [...restaurant.starterMenu];

// collect element

const { sat, ...weekday } = restaurant.openingHours;

// ex function

const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
    console.log(sum);
  }
};

/*
add(2,3,4)

const x = [23,5,7]

add(...x)

restaurant.orderPizza('KebabPizza', 'ham ', 'mozzerela','feferoni','cheddar')

*/

/*
const rest1 = {
  name:'Capri',
  numGuests :30,
}
*/

/*
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'Capri',
  owner: 'King',
};

rest1.numGuests ??= 10; // nullish operator kommer sätta rätt
//rest2.numGuests ||= 10

rest2.owner &&= 'Anynom';

*/
