// for given phrase, generate all the spans for each character within phrase
var phrase = 'grumpy wizards make toxic brew';
for (let i = 0; i < phrase.length; i++) {
  var newSpan = document.createElement('span');
  var spanChar = document.createTextNode(phrase[i]);
  newSpan.appendChild(spanChar);
  if (i === 0) {
    newSpan.classList.add('current');
  }
  var parentH1 = document.querySelector('h1');
  parentH1.appendChild(newSpan);
}

var allSpans = document.querySelectorAll('span');
var index = 0;
var keyStrokes = 0;
var correctKeyStrokes = 0;
var done = false;

document.addEventListener('keydown', function (e) {
  var currentKey = e.key;
  if (index < allSpans.length) {
    keyStrokes++;
    if (currentKey === allSpans[index].textContent) {
      allSpans[index].className = 'right';
      if (index + 1 < allSpans.length) {
        allSpans[index + 1].className = 'current';
      }
      correctKeyStrokes++;
      index++;
    } else {
      allSpans[index].className = 'wrong current-wrong';
    }
  }
  if (index === allSpans.length && !done) {
    var container = document.querySelector('.container');
    var endText = document.createTextNode(`Accuracy: ${(correctKeyStrokes / keyStrokes * 100).toFixed(2)}%`);
    var playAgain = document.createTextNode('Play Again? (Refresh)');
    var newDiv = document.createElement('div');
    var newP = document.createElement('p');
    var againP = document.createElement('p');
    newP.appendChild(endText);
    againP.appendChild(playAgain);
    newDiv.appendChild(newP);
    newDiv.appendChild(againP);
    container.appendChild(newDiv);
    done = true;
  }
});
