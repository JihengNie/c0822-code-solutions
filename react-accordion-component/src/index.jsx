import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const languages = [
  { langId: '001', name: 'HML', description: 'Words about HML' },
  { langId: '002', name: 'CSS', description: 'Words about CSS' },
  { langId: '003', name: 'JS', description: 'Words about JS' }
];

root.render(<Accordion data={languages}/>);
