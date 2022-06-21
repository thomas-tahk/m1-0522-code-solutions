
console.log('hello, world');

var h1s = document.querySelector('h1');
console.log('queried h1:', h1s);
console.dir(h1s);

var explanation = document.querySelector('#explanation');
console.log('element with id of explanation:', explanation);
console.dir(explanation);

var hint = document.querySelector('.hint');
console.log('element with class hint:', hint);
console.dir(hint);

var allp = document.querySelectorAll('p');
console.log('all p"s:', allp);

var allExampleLink = document.querySelectorAll('.example-link');
console.log('all elements with class example-link:', allExampleLink);
