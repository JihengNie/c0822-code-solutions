var $countDownDisplay = document.querySelector('.countdown-display');
var counter = 3;
var intervalId = setInterval(countDown, 2000);

function countDown() {
  if (counter === 0) {
    $countDownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  } else {
    $countDownDisplay.textContent = counter;
    counter--;
  }
}
