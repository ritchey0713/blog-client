import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'

ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();
