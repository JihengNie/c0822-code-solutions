var $letterNodeList = document.querySelectorAll('.typed-no');
var $playAgain = document.querySelector('.play-again');

window.addEventListener('keydown', typingLetters);
var i = 0;
function typingLetters(event) {
  if (event.key !== $letterNodeList[i].textContent && $letterNodeList[i].className === 'typed-no current') {
    $letterNodeList[i].className = 'typed-wrong current';
  }
  if (event.key === $letterNodeList[i].textContent && ($letterNodeList[i].className === 'typed-no current' || $letterNodeList[i].className === 'typed-wrong current')) {
    $letterNodeList[i].className = 'typed-correct';
    if (i < $letterNodeList.length) {
      $letterNodeList[i + 1].className = 'typed-no current';
    }
    i++;
  }
}
if (i - 1 === $letterNodeList.length) {
  $playAgain.className = 'play-again';
}
