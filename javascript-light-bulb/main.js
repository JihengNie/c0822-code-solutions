var $lightBulb = document.querySelector('.bulb');
var $lightStatus = document.querySelector('.off');
var isLightOn = true;

function clicksFunction(event) {
  if (isLightOn === false) {
    $lightStatus.className = 'off';
    $lightBulb.className = 'blub bulb-off';
    isLightOn = true;
  } else {
    $lightStatus.className = 'on';
    $lightBulb.className = 'blub bulb-on';
    isLightOn = false;
  }
}

$lightBulb.addEventListener('click', clicksFunction, false);
