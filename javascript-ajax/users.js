var $userList = document.querySelector('#user-list');

var users = new XMLHttpRequest();
users.open('GET', 'https://jsonplaceholder.typicode.com/users');
users.responseType = 'json';
users.addEventListener('load', function () {
  console.log('users.status: ', users.status);
  console.log('users.response: ', users.response);
  for (var i = 0; i < users.response.length; i++) {
    var newListItem = document.createElement('li');
    newListItem.textContent = users.response[i].name;
    $userList.appendChild(newListItem);
  }
});

users.send();
