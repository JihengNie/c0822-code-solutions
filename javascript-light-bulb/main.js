var $lightBulb = document.querySelector('.bulb');
var $lightStatus = document.querySelector('.off');
var clicks = 0;

function clicksFunction(event) {
  clicks++;
  if (clicks % 2 === 0) {
    $lightStatus.className = 'off';
    $lightBulb.className = 'blub bulb-off';
  } else {
    $lightStatus.className = 'on';
    $lightBulb.className = 'blub bulb-on';
  }
}

$lightBulb.addEventListener('click', clicksFunction, false);
