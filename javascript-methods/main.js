var number1 = 7;
var number2 = 42;
var number3 = 350;

var maximumValue = Math.max(number1, number2, number3);
console.log('maximumValue:', maximumValue);

var heroes = ['Spawn', 'Booster Gold', 'Storm', 'Green Arrow'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Speaker for the Dead',
    author: 'Orson Scott Card'
  },
  {
    title: 'So Long, and Thanks for All the Fish',
    author: 'Douglas Adams'
  },
  {
    title: 'Hamlet',
    author: 'William Shakespeare'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Thomas Tahk';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
