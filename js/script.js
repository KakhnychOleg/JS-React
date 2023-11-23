'use strict';


// link
// const obj = {
//    a: 5,
//    b: 10,
// };

// console.log(obj.a);

function copy(mainObj) {
   let objCopy = {};

   let key;
   for (key in mainObj) {
      objCopy[key] = mainObj[key];
   }

   return objCopy;
};

const numbers = {
   a: 2,
   b: 4,
   c: {
      x: 7,
      y: 4,
   }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);


// Object
const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   }
};

// console.log(options.name);

// delete options.name;

// console.log(options);

for (let key in options) {
   console.log(`Свойство ${key}: значение ${options[key]}`);
}



// Callback
function first() {
   setTimeout(function() {
      console.log(1);
   }, 500);
}

function second() {
   console.log(2)
}
first();
second();

function learnJS(lang, callback) {
   console.log(`Я учу ${lang}`);
   callback();
}

learnJS('JavaScript', function() {
   console.log('Я прошел этот урок!');
});


// Место для первой задачи
function calculateVolumeAndArea(number) {

   if (typeof(number) !== 'number' || number < 0 || !Number.isInteger(number)) {
      return 'При вычислении произошла ошибка';
   }
   
   let resultV = number * number * number;
   let resultS = 6 * number * number;
   
   return `Объем куба: ${resultV}, площадь всей поверхности: ${resultS}`;
}
calculateVolumeAndArea(5);
console.log(calculateVolumeAndArea('asd'));


// Место для второй задачи
function getCoupeNumber(number) {
   if (number === 0 || number > 36) {
      return "Таких мест в вагоне не существует";
   } else if (number < 0 || typeof(number) != 'number' || !Number.isInteger(number)) {
      return "Ошибка. Проверьте правильность введенного номера места";
   }
   
   return Math.ceil(number / 4);
}
getCoupeNumber(5);
console.log(getCoupeNumber('asd'));


// method to string *********************************************************************************
const str = 'Test';

console.log(str);
console.log(str.toUpperCase());

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); // Показывает с какой позиции начинается слово. Выведет - 5

const logg = 'Hello world';

console.log(logg.slice(6, 8));
console.log(logg.substring(6, 8)); // не принимает отрицательные числа.
// console.log(logg.substr(6, 8));


const number = 12.2;
console.log(Math.round(num));


const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));


// Место для первой задачи
function sayHello(name) {
   return 'Привет, ' + name + '!';
}
sayHello('Антон');
console.log(sayHello('Антон'));

// Место для второй задачи
function returnNeighboringNumbers(number) {
   return [number--, number, number++];
}
returnNeighboringNumbers(5);
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(num, times) {
   if (typeof(times) !== 'number' || times <= 0) {
       return num;
   }

   let str = '';

   for (let i = 1; i <= times; i++) {
       if (i === times) {
           str += `${num * i}`;
       } else {
           str += `${num * i}---`;
       }
   }

   return str;
}

getMathResult(10, 5);


// Конвертация валют
const usdCurr = 36.2;
const eurCurr = 38;
const discount = 0.9;

function convert(amount, curr) {
   return curr * amount;
}

function promotion(result) {
   console.log(result * discount);
}

// лучше делать промежуточную переменную
let res = convert(500, usdCurr);
promotion(res);

// function declaration
function showFirstMess(text) {
   console.log(text);
}

showFirstMess('Hello!');

// function exspression
const sum = function(a, b) {
   return (a + b);
};

console.log(sum(4, 5));

// arrow function
// const calc = (a, b) => a + b;
// console.log(calc(5, 10));

const calc = (a, b) => {
   console.log('1');
   return a + b;
};



// Условия и циклы ***********************************************************

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// };

// for (let i = 0; i < 2; i++) {
//    const a = prompt('Oдин из последних просмотренных фильмов?', ''),
//          b = prompt('На сколько оцените его?', '');

//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//    } else {
//       console.log('error');
//       i--;
//    }
// }

// if (personalMovieDB.count < 10) {
//    console.log('Просмотрено мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//    console.log('Вы класический зритель');
// } else if (personalMovieDB.count >= 30) {
//    console.log('Вы киноман');
// } else {
//    console.log('Error');
// }

// console.log(personalMovieDB);


// Елечка из " * " *********************************
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let length = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//       length += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//       length += "*";
//     }
//     length += "\n";
// }

// console.log(length)
// ***********************************************

// function fourthTask() {
//    // Пишем решение вот тут
//    let i = 2;
   
//    while (i <= 16) {
//        if (i % 2 === 0) {
//            continue;
//        } else {
//            console.log(i);
//        }
//        i++;
//    }
   
// }


// for in for Вложенные циклы ****************************************************

// for (let i = 0; i < 3; i++) {
//    console.log(i);

//    for (let j = 0; j < 3; j++) {
//       console.log(j);
//    }
// }

// let result = '';
// let lenght = 10;

// for (let i = 1; i < lenght; i++) {

//    for (let j = 1; j < i; j++) {
//       result += '*';
//    }

//    result += '\n';
// }

// console.log(result);

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

// for (let i = 1; i < 10; i++) {
//    if (i === 6) {
//       continue;
//    }

//    console.log(i);
// }


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



// console.log( NaN || 2 || undefined ); // 2

// console.log( NaN && 2 && undefined ); //NaN

// console.log( 1 && 2 && 3 ); //3

// console.log( !1 && 2 || !3 );  //false

// console.log( 25 || null && !3 ); //25

// console.log( NaN || null || !3 || undefined || 5); // 5

// console.log( NaN || null && !3 && undefined || 5); //5

// console.log( 5 === 5 && 3 > 1 || 5); //true


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

// const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '');

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// };

// const a = prompt('Oдин из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Oдин из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Task END ****************************************************************


// console.log(2 + 2 * 2 !== 6);


// let incr = 10;
// let decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);


// const category = 'category';

// console.log(`https://someurl.com/${category}`);

// const user = "Oleg";

// alert(`Hi, ${user}!`);



// alert("Hello!");

// const error = confirm('Are you here?');
// console.log(error);


// const question = prompt('You have 18+?', 'Yes');
// console.log(question);


// const answer = [];

// answer[0] = prompt('Name?', '');
// answer[1] = prompt('Last Name?', '');
// answer[2] = prompt('Year?', '');

// console.log(typeof(answer));
