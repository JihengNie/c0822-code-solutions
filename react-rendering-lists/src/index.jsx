import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const pokemonList = pokedex.map(items => <li key={items.number}>{items.name}</li>);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <ul>{pokemonList}</ul>;

root.render(element);
