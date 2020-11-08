"use strict";


// ------Function Declaration------


// базова функція з локальними змінними

function showHello() {
  let helloMessage = "Hello!";
	alert(helloMessage);
}

showHello();
// alert( helloMessage );  - буде помилка 


// робота функції з глобальними змінними

let worker = 'Ivanov';

function sayHiToWorker() {
  let hiMessage = 'Hi, ' + worker;
	alert(hiMessage);
}

sayHiToWorker();

function sayHiToWorker2(){
  worker = 'Petrenko';       // можемо міняти змінну
  let hiMessage = 'Hi, ' + worker;
    alert(hiMessage);
}

sayHiToWorker2();
alert(worker);

// функція з параметрами та параметрами за замовчуванням

function calculate(param) {
  let b = param + 5;
	return b;
}

alert(calculate(5));

function calculate2(param = 5) {
  let b = param + 5;
	return b;
}

alert(calculate2());
alert(calculate2(6));

let result = calculate2(7);
alert(result);


// ------- Function Expression -------


function greetings() {
  alert("Hello");
}

let funct = greetings;   // немає дужок то ж ми копіюємо значення а не результат роботи функції

funct();
greetings();

// класична function expression, функцыя присвоєна змінній 

let sayMyName = function(name) {  
  alert( `Privet, ${name}` );
};

sayMyName('Petro');


// ------- arrow functions функції стрілки -------


let sum = function(a, b) {   // використання анонімної функції
  return a + b;
};

alert( sum(2, 2) );

let sum2 = (a, b) => a + b;

alert( sum(2, 2) );


// завдання з сайту змінити функцію нижче на функцію стрілки

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Confirm?",
  function() { alert("You have confirmed!"); },  // використання анонімної функції
  function() { alert("You have denied!"); }
);


// мій варіантр

let question = confirm("Confirm?");

let confirm1 = question ?
	() => alert("You have confirmed!") :
	() => alert("You have denied!"); 

confirm1();

