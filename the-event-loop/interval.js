let count = 3;
function blastOff() {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  } else {
    console.log(count);
    count--;
  }
}

const intervalId = setInterval(blastOff, 1000);
