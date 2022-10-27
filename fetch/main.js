const placeHolders = 'https://jsonplaceholder.typicode.com/users';

const bigData = [];

fetch(placeHolders)
  .then(response => response.json())
  .then(data => bigData.push(data));

const pokeApi = 'https://pokeapi.co/api/v2/pokemon/1';

fetch(pokeApi)
  .then(response => response.json())
  .then(data => bigData.push(data));

console.log(bigData);
