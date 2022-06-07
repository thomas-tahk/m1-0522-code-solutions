/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return person.firstName.slice(0, 1) + person.lastName.slice(0, 1);
}
