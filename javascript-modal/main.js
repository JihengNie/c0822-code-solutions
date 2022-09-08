var modalButton = document.querySelector('.modal-button');
var noButton = document.querySelector('.no-button');
var popUp = document.querySelector('.pop-up');

function modalPressed(event) {
  popUp.className = 'pop-up center';
}
modalButton.addEventListener('click', modalPressed);

function noPressed(event) {
  popUp.className = 'pop-up center off';
}
noButton.addEventListener('click', noPressed);
