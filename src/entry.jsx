import React from 'react';
import { render } from 'react-dom';
import Header from './components/head/header.jsx';
import './entry.css';

// function App() {
render(
  // <h1>Hello, world!</h1>,
  <div>
    <Header />
  </div>,
  document.getElementById('root'),
);
// }

// setInterval(App, 1000);
