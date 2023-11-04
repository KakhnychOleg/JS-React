'use strict';



// for in for Вложенные циклы ****************************************************

for (let i = 0; i < 3; i++) {
   console.log(i);

   for (let j = 0; j < 3; j++) {
      console.log(j);
   }
}

let result = '';
let lenght = 10;

for (let i = 1; i < lenght; i++) {

   for (let j = 1; j < i; j++) {
      result += '*';
   }

   result += '\n';
}

console.log(result);

// Метка для цикла 

// first: for (let i = 1; i < lenght; i++) {

//    for (let j = 1; j < i; j++) {
//       if (i === 6) continue first;
//       result += '*';
//    }

//    result += '\n';
   
// }

// console.log(result);

// for & while ************************************************************88

// let num = 50;

// while (num < 55) {
//    console.log(num);
//    num++;
// } 
// do {
//    console.log(num);
//    num++;
// } 
// while (num < 55);

for (let i = 1; i < 10; i++) {
   if (i === 6) {
      continue;
   }

   console.log(i);
}


// homework - && and || *************************************************************

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
// false

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }
// true


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
// true



console.log( NaN || 2 || undefined ); // 2

console.log( NaN && 2 && undefined ); //NaN

console.log( 1 && 2 && 3 ); //3

console.log( !1 && 2 || !3 );  //false

console.log( 25 || null && !3 ); //25

console.log( NaN || null || !3 || undefined || 5); // 5

console.log( NaN || null && !3 && undefined || 5); //5

console.log( 5 === 5 && 3 > 1 || 5); //true


// || ***************************************************************

// const hamburger = 2;
// const fries = 0;
// const cola = 0;
// const nuggets = 2;

// cola === 1 (можно писать как cola) тоже самое
// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//    console.log(' Все довольны!');
// } else {
//    console.log('Уходим');
// }

// && ****************************************************************

// const hamburger = 2;
// const fries = 1;
// const cola = 1;

// cola === 1 (можно писать как cola) тоже самое
// if (hamburger === 3 && cola && fries) {
//    console.log(' Я сыт!');
// } else {
//    console.log('Уходим');
// }


// Условия If *****************************************************************

// const num = 50;

// if(num < 49) {
//    console.log('Error');
// } else if (num > 100) {
//    console.log('Mnogo');
// } else {
//    console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// switch (num) {
//    case 49: 
//       console.log('mimo');
//       break;
//    case 51: 
//       console.log('mimo');
//       break;
//    case 50: 
//       console.log('Ok');
//       break;
//    default: 
//       console.log('ne povezlo');
//       break;
// }
 
// END *********************************************************************


// Task create window film question **************************************** 

const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Oдин из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Oдин из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// Task END ****************************************************************


console.log(2 + 2 * 2 !== 6);


let incr = 10;
let decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);


const category = 'category';

console.log(`https://someurl.com/${category}`);

const user = "Oleg";

alert(`Hi, ${user}!`);



alert("Hello!");

const error = confirm('Are you here?');
console.log(error);


const question = prompt('You have 18+?', 'Yes');
console.log(question);


const answer = [];

answer[0] = prompt('Name?', '');
answer[1] = prompt('Last Name?', '');
answer[2] = prompt('Year?', '');

console.log(typeof(answer));
