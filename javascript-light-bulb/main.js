var $lightBulb = document.querySelector('.bulb');
var $lightStatus = document.querySelector('.off');
var clicks = true;

function clicksFunction(event) {
  if (clicks === true) {
    $lightStatus.className = 'off';
    $lightBulb.className = 'blub bulb-off';
    clicks = false;
  } else {
    $lightStatus.className = 'on';
    $lightBulb.className = 'blub bulb-on';
    clicks = true;
  }
}

$lightBulb.addEventListener('click', clicksFunction, false);
