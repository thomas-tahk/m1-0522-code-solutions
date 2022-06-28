var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var messageData = {};
  messageData[contactForm.elements.name.getAttribute('name')] = contactForm.elements.name.value;
  messageData[contactForm.elements.email.getAttribute('name')] = contactForm.elements.email.value;
  messageData[contactForm.elements.message.getAttribute('name')] = contactForm.elements.message.value;
  console.log('messageData:', messageData);
  contactForm.reset();
});
