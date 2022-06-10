/* exported getStudentNames */
function getStudentNames(students) {
  var namesArray = [];
  for (let i = 0; i < students.length; i++) {
    namesArray.push(students[i].name);
  }
  return namesArray;
}
