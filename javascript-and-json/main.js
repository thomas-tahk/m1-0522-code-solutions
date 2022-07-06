var threeBooks = [
  {
    isbn: '9781250832375',
    title: 'Eye of the  World',
    author: 'Robert Jordan'
  },
  {
    isbn: '9780312937386',
    title: 'Speaker for the Dead',
    author: 'Orson Scott Card'
  },
  {
    ibsn: '97800451460271',
    title: 'Dead Beat',
    author: 'Jim Butcher'
  }
];
console.log('books array:', threeBooks);
console.log('type of books array:', typeof threeBooks);

var bookString = JSON.stringify(threeBooks);
console.log('string result:', bookString);
console.log('result type:', typeof bookString);

var studentString = '{"id": 25282348, "name": "Thomas Tahk" }';

console.log('student string:', studentString);
console.log('student type:', typeof studentString);

var studentObject = JSON.parse(studentString);
console.log('object:', studentObject);
console.log('object type:', typeof studentObject);
