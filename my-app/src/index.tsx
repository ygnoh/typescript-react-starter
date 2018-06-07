import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from "./reducers";
import { StoreState } from './types';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

ReactDOM.render(
  <Provider store={ store }>
    <Hello />
  </Provider>,
  // the below line is called "type assertion"
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
