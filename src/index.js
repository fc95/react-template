import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import _createStore from './redux';
import App from './pages/app';
import LocaleWrapper from './LocaleWrapper';
import Loading from './components/loading';

const routerBase = window.routerBase || '';

ReactDOM.render(
  <Loading />,
  document.getElementById('root'));

window.ZC.init((data = {}) => {
  console.log('=== init data ===>', data);
  const { locale, ...rest } = data;
  ReactDOM.render(
    <LocaleWrapper locale={locale}>
      <Provider store={_createStore(rest)}>
        <App basename={routerBase} />
      </Provider>
    </LocaleWrapper>,
    document.getElementById('root'));
});