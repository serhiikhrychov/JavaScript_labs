"use strict";

// проста функція

let someDigit = 0;

function count() {
  someDigit++
  console.log( someDigit );
}

count();
//someDigit = 55;    // хтось може мінити нашу змінну
count();
count();


// функція замикання. захищаємо змінну від сторонього запису

function closureCounter() {
  let digit = 0;
  return function() {
	digit++;
	console.log( digit );
	}
}

let countcl = closureCounter();
countcl();
countcl();
countcl();

// значення змінної зберігається поки є "ссилка" на функцію
countcl = null;
countcl = closureCounter();
countcl();


// функція displayName це замикання 

function person() {
  let name = 'Peter';  
  return function displayName() {
    alert( name );
  };
}

let peter = person();
peter();


// counter не скидаємо кожен раз в 0

function getCounter() {
  let counter = 0;
  return function() {
    return counter++;
  }
}

let counterTest = getCounter();
let counterTest1 = getCounter();

console.log(counterTest());  // 0
console.log(counterTest());  // 1
console.log(counterTest());  // 2

console.log(counterTest1());  // 0


// приклад роботи з оточенням

let a = 10, c = 5;

function testFunction(a) {
  let b = 15;
  alert(c);
  return function(b) {
	return b + a;
	}
}

let f = testFunction(1);
alert( f(2) );


// інший приклад

function makeWorker() {
  let name = "Pete";  
  return function() {
    alert( name );
  };
}

let name = "John";
let work = makeWorker();
work();