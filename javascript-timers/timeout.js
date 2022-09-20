setTimeout(changeMessage, 2000);

var $heading = document.querySelector('.message');

function changeMessage() {
  $heading.textContent = 'Hello There';
}
