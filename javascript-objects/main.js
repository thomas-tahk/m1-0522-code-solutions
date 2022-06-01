var student = {
  firstName: 'Thomas',
  lastName: 'Tahk',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'translator';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2019
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Dori',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
