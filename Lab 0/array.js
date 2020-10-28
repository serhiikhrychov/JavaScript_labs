"use strict";

// просте оголошення масиву та вивід 1го елементу на екран
let names = ['name1', 'name2', 'name3'];
alert( names[0] )

// підміняємо значення та виводимо всі елементи массива
names[0] = 'Serhii';

for (let i = 0; i < names.length; i++) {
  alert( names[i] );
}

// додамо елемент в кінець нашого массиву
names.push('Andrii');
alert( names );

// видалимо останній елемент масиву
names.pop();
alert( names );

// заповнимо массив автоматично використовуючи функцію
let array = [];
fillArray(3);
alert( array );

function fillArray(amoumtElements) {
for (let i = 0; i < amoumtElements; i++){
	array[i] = i;
}
}



