function handleFocus(event) {
  console.log('The focus event was fired');
  console.log('event.target.name is: ', event.target.name);
}

function handleBlur(event) {
  console.log('The blur event was fired');
  console.log('event.target.name is: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name is: ', event.target.name);
  console.log('event.target.value is: ', event.target.value);
}

var $nameInput = document.querySelector('#user-name');
var $emailInput = document.querySelector('#user-email');
var $messageText = document.querySelector('#user-message');

$nameInput.addEventListener('focus', handleFocus, false);
$nameInput.addEventListener('blur', handleBlur, false);
$nameInput.addEventListener('input', handleInput, false);

$emailInput.addEventListener('focus', handleFocus, false);
$emailInput.addEventListener('blur', handleBlur, false);
$emailInput.addEventListener('input', handleInput, false);

$messageText.addEventListener('focus', handleFocus, false);
$messageText.addEventListener('blur', handleBlur, false);
$messageText.addEventListener('input', handleInput, false);
