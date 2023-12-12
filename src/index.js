import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'

/* import App from './App';
 
import Counter from './Counter';
import StateCounter from './StateCounter';
import ComplexState from './ComplexState'; */
import ListDisplay from './ListDisplay';
let counter =89

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

/* const promise = axios.get('http://localhost:3002/notes')

console.log('promise',promise)

const promise2 = axios.get('http://localhost:3002/foobar')
console.log('promise2',promise2) */

//debugger

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<ListDisplay />
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

