import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { reqIntercept, resIntercept } from '../src/middleware/Interceptors';

import { Provider } from 'react-redux';
import store from './redux/store';

// reqIntercept();
// resIntercept();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
