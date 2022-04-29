import React from 'react';
import ReactDOM from 'react-dom/client';
//import PrimeraAPP from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';



const divRoot = document.querySelector('#root');

// ReactDOM.render( saludo, divRoot ); //React 17

const root = ReactDOM.createRoot( divRoot );
// root.render( <PrimeraAPP saludo = 'Hola Mundo!!' /> );
root.render(<CounterApp  value = { 0 } />);