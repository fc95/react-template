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

window.PubSub.sub('inited', (data = {}) => {
  console.log('=== init data ===>', data);
  const { Locale, Measurements, Patient = {} } = data;
  console.log(Measurements);
  const locale = Locale;
  const patient = {
    name: Patient.Name || '******',
    sex: Patient.Sex || '******',
    age: Patient.Age || '******',
    id: Patient.ID || '******',
  };
  ReactDOM.render(
    <LocaleWrapper locale={locale}>
      <Provider store={_createStore({ patient })}>
        <App basename={routerBase} />
      </Provider>
    </LocaleWrapper>,
    document.getElementById('root'));
});