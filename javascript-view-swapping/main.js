var $tabContainer = document.querySelector('.tab-container');
var $tabNodes = document.querySelectorAll('.tab');
var $viewNodes = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabNodes.length; i++) {
      if ($tabNodes[i] === event.target) {
        $tabNodes[i].classList.add('active');
      } else {
        $tabNodes[i].classList.remove('active');
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (let j = 0; j < $viewNodes.length; j++) {
      if ($viewNodes[j].getAttribute('data-view') === dataView) {
        $viewNodes[j].classList.remove('hidden');
      } else {
        $viewNodes[j].classList.add('hidden');
      }
    }
  }
});
