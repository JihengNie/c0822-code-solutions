import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const pokemonData = [
  {
    Id: 1,
    URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    name: 'FireButt'
  },
  {
    Id: 2,
    URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    name: 'Leaf Shooter'
  },
  {
    Id: 3,
    URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    name: 'Water Boi'
  },
  {
    Id: 4,
    URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    name: 'Yellow Squirrel'
  },
  {
    Id: 5,
    URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
    name: 'Cotton Candy'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel poke={pokemonData} />);
