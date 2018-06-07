import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { enthusiasm } from "./reducers";
import { StoreState } from './types';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10} />,
  // the below line is called "type assertion"
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
