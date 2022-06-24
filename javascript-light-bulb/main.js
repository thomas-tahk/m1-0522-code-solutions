// listen for clicks on light bulb to turn it on or off
var bodySwitch = document.querySelector('body');
var lightBulb = document.querySelector('#lightbulb');
function onOff(e) {
  if (lightBulb.className === 'on' && bodySwitch.className === 'light') {
    lightBulb.className = 'off';
    bodySwitch.className = 'dark';
  } else if (lightBulb.className === 'off' && bodySwitch.className === 'dark') {
    lightBulb.className = 'on';
    bodySwitch.className = 'light';
  }
}
lightBulb.addEventListener('click', onOff);
