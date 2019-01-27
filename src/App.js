import React from 'react';
import ReactDOM from 'react-dom';
import style from './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counters from './components/counters/index';
import reducer from './redux-flow/reducers/counters/index';

const store = createStore(reducer);

const App = () => {
  return (
    <div className={style.app}>
      <Counters />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
