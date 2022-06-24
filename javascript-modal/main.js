var openButton = document.querySelector('.open');
var modal = document.querySelector('.modal-hidden');
var closeButton = document.querySelector('.no');

openButton.addEventListener('click', function (e) {
  modal.className = 'modal-shown';
});

closeButton.addEventListener('click', function (e) {
  modal.className = 'modal-hidden';
});
