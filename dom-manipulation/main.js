var timesClicked = 0;
var hotButton = document.querySelector('.hot-button');
var countClick = document.querySelector('.click-count');
hotButton.addEventListener('click', function (event) {
  timesClicked++;
  countClick.textContent = `Clicks: ${timesClicked}`;
  if (timesClicked < 4) {
    hotButton.className = 'hot-button cold';
  } else if (timesClicked < 7) {
    hotButton.className = 'hot-button cool';
  } else if (timesClicked < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (timesClicked < 13) {
    hotButton.className = 'hot-button warm';
  } else if (timesClicked < 16) {
    hotButton.className = 'hot-button hot';
  } else if (timesClicked >= 16) {
    hotButton.className = 'hot-button nuclear';
  }
});
