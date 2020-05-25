import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux';
// import './reset.css';
import App from './pages/app';

const routerBase = window.routerBase || '';

ReactDOM.render(
  <Provider store={store}>
    <App basename={routerBase} />
  </Provider>,
  document.getElementById('root'));
