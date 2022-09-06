var $hotbutton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

var clicks = 0;

function clickTracker(event) {
  clicks++;
  $clickCount.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    $hotbutton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotbutton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotbutton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotbutton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotbutton.className = 'hot-button hot';
  } else {
    $hotbutton.className = 'hot-button nuclear';
  }
}

$hotbutton.addEventListener('click', clickTracker, false);
