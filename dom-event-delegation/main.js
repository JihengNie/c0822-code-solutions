var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', logEvents);

function logEvents(event) {
  console.log('Event-target: ', event.target);
  console.log('Event-target.tagname: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closestNode = event.target.closest('.task-list-item');
    console.log('closestNode: ', closestNode);
    closestNode.remove(closestNode);
  }
}
