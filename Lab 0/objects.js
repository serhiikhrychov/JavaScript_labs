"use strict";


// динамічне створення об'єкту'
let bodyGuard = {};
  bodyGuard.name = 'Alex';
  bodyGuard.surname = 'Ivanov';
  bodyGuard.isGun = true;

// виведемо на екран кей та велью об'єкта
for (let key in bodyGuard) {
  alert( key );  
  alert( bodyGuard[key] ); 
} 

// літеральний опис об'єкта
let housewife = {
  name: 'Anna',
  surname: 'Petrenko',
  isGun: false,
  family: ['husband', 'kid1', 'kid2'],
}

// виведемо на екран кей та велью об'єкта
for (let key in housewife) {
  alert( key );
  alert( housewife[key] ); 
} 

//додати велью від юзера та записати його як число
let solidPerrson = {};
let moneyForSolidPerson = +prompt('How much money should solid person has?');
solidPerrson.money = moneyForSolidPerson;

console.log(solidPerrson.money);

