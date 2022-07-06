/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
window.addEventListener('beforeunload', function (event) {
  var todoJSON = JSON.stringify(todos);
  this.localStorage.setItem('javascript-local-storage', todoJSON);
});
