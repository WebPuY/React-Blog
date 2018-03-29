import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './css/reset.css';
// import App from './test/App';
import IndexApp from './containers'
import configureStore from './configureStore'
import registerServiceWorker from './test/registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <IndexApp />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
