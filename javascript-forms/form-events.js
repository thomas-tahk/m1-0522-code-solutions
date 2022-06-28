function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log(`value of ${event.target.name}: ${event.target.value}`);
}

// alternatives to querying
// var nameField = document.forms[0].elements.name;
// var emailField = document.forms[0].elements.email;
// var messageText = document.forms[0].elements.message;

var nameField = document.querySelector("input[name='name']");
var emailField = document.querySelector("input[name='email']");
var messageText = document.querySelector("textarea[name='message']");

nameField.addEventListener('focus', handleFocus);
nameField.addEventListener('blur', handleBlur);
nameField.addEventListener('input', handleInput);

emailField.addEventListener('focus', handleFocus);
emailField.addEventListener('blur', handleBlur);
emailField.addEventListener('input', handleInput);

messageText.addEventListener('focus', handleFocus);
messageText.addEventListener('blur', handleBlur);
messageText.addEventListener('input', handleInput);
