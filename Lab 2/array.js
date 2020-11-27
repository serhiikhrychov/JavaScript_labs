"use strict";


// ------ forEach ------

let arrayWithName = ["Sam", "Alex", "Mic"];

arrayWithName.forEach(function(item, i, arrayWithName) {
  alert( i + ": " + item + " (array:" + arrayWithName + ")" );
});


// ------ filter ------

let numArr = [1, 5, -2, -3, 7, 0];

let positiveArr = numArr.filter(function(number) {
  return number >= 0;
});

alert( positiveArr ); // 1,5,7,0


// ------ map ------

let titles = ['SomeT1', 'SomeT22', 'SomeT333'];

let titleLengths = titles.map(function(title) {
  return title.length;
});

alert( titleLengths ); // 6,7,8


// ------ every/some ------

let numArray1 = [5, -7, 3, -22, 50];

function isPositive(number) {
  return number > 0;
}

alert( numArray1.every(isPositive) ); // false, не всі > 0
alert( numArray1.some(isPositive) ); // true, є хоча б одне > 0


// ------ reduce/reduceRight ------

let numArray2 = [1, 2, 3, 4, 5]

let result = numArray2.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert( result ); // 15


let numArray3 = [1, 2, 3, 4, 5]

let result1 = numArray3.reduceRight(function(sum, current) {
  return sum + current;
}, 0);

alert( result ); // 15



