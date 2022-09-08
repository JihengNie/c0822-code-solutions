var $letterNodeList = document.querySelectorAll('.typed-no');
var $playAgain = document.querySelectorAll('.play-again');

window.addEventListener('keydown', typingLetters, true);
var i = 0;
function typingLetters(event) {
  if (event.key !== $letterNodeList[i].textContent && $letterNodeList[i].className === 'typed-no current') {
    $letterNodeList[i].className = 'typed-wrong current';
  }
  if (event.key === $letterNodeList[i].textContent && ($letterNodeList[i].className === 'typed-no current' || $letterNodeList[i].className === 'typed-wrong current')) {
    $letterNodeList[i].className = 'typed-correct';
    $letterNodeList[i + 1].className = 'typed-no current';
    i++;
  }
  if (i - 1 === $letterNodeList.length) {
    $playAgain.className = 'play-again';
  }

}
