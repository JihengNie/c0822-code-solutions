// Variables
var $pokemonImages = document.querySelectorAll('.pokemon-images');
var $bubbles = document.querySelectorAll('.fa-circle');
var $leftChevron = document.querySelector('.left-chevron');
var $rightChevron = document.querySelector('.right-chevron');
var $bubblesContainer = document.querySelector('.bubbles-container');

var indexCounter = 0;
var intervalId = setInterval(autoRotateImages, 2000);

// Event Listeners
$rightChevron.addEventListener('click', rightChevronClick);
$leftChevron.addEventListener('click', leftChevronClick);
$bubblesContainer.addEventListener('click', bubbleClick);

// Functions
function rightChevronClick(event) {
  clearInterval(intervalId);
  indexCounter++;
  indexCounter = indexCounter % ($pokemonImages.length);
  if (indexCounter === 0) {
    $bubbles[indexCounter].className = 'fa-solid fa-circle';
    $bubbles[$pokemonImages.length - 1].className = 'fa-regular fa-circle';
    $pokemonImages[indexCounter].className = 'pokemon-images';
    $pokemonImages[$pokemonImages.length - 1].className = 'pokemon-images hidden';
  } else {
    $pokemonImages[indexCounter].className = 'pokemon-images';
    $pokemonImages[indexCounter - 1].className = 'pokemon-images hidden';
    $bubbles[indexCounter].className = 'fa-solid fa-circle';
    $bubbles[indexCounter - 1].className = 'fa-regular fa-circle';
  }
  // Interval Resetting
  intervalId = setInterval(autoRotateImages, 2000);
}

function leftChevronClick(event) {
  clearInterval(intervalId);
  indexCounter = indexCounter + $pokemonImages.length - 1;
  indexCounter = indexCounter % ($pokemonImages.length);
  if (indexCounter === $pokemonImages.length - 1) {
    $bubbles[0].className = 'fa-regular fa-circle';
    $bubbles[$pokemonImages.length - 1].className = 'fa-solid fa-circle';
    $pokemonImages[0].className = 'pokemon-images hidden';
    $pokemonImages[$pokemonImages.length - 1].className = 'pokemon-images';
  } else {
    $pokemonImages[indexCounter + 1].className = 'pokemon-images hidden';
    $pokemonImages[indexCounter].className = 'pokemon-images';
    $bubbles[indexCounter + 1].className = 'fa-regular fa-circle';
    $bubbles[indexCounter].className = 'fa-solid fa-circle';
  }
  // Interval Resetting
  intervalId = setInterval(autoRotateImages, 2000);
}

function bubbleClick(event) {
  clearInterval(intervalId);
  if (event.target.tagName !== 'I') {
    return;
  }
  // Reset Bubbles
  for (var i = 0; i < $bubbles.length; i++) {
    $bubbles[i].className = 'fa-regular fa-circle';
  }
  // Setting New counter
  event.target.className = 'fa-solid fa-circle';
  for (var j = 0; j < $bubbles.length; j++) {
    if ($bubbles[j].className === 'fa-solid fa-circle') {
      indexCounter = j;
    }
  }
  // Reset Pokemon images
  for (var k = 0; k < $pokemonImages.length; k++) {
    $pokemonImages[k].className = 'pokemon-images hidden';
  }

  $pokemonImages[indexCounter].className = 'pokemon-images';

  // Interval Resetting
  intervalId = setInterval(autoRotateImages, 2000);
}

function autoRotateImages() {
  indexCounter++;
  indexCounter = indexCounter % $pokemonImages.length;
  if (indexCounter === 0) {
    $bubbles[indexCounter].className = 'fa-solid fa-circle';
    $bubbles[$pokemonImages.length - 1].className = 'fa-regular fa-circle';
    $pokemonImages[indexCounter].className = 'pokemon-images';
    $pokemonImages[$pokemonImages.length - 1].className = 'pokemon-images hidden';
  } else {
    $pokemonImages[indexCounter].className = 'pokemon-images';
    $pokemonImages[indexCounter - 1].className = 'pokemon-images hidden';
    $bubbles[indexCounter].className = 'fa-solid fa-circle';
    $bubbles[indexCounter - 1].className = 'fa-regular fa-circle';
  }
}
