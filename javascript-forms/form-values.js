
var $theForm = document.querySelector('#contact-form');

function formSubmitted(event) {
  event.preventDefault();
  var formData = {};
  formData.name = $theForm.elements.name.value;
  formData.email = $theForm.elements.email.value;
  formData.message = $theForm.elements.message.value;
  console.log('formData: ', formData);
  $theForm.reset();
}

$theForm.addEventListener('submit', formSubmitted, false);
