import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.scss'     

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Route path='/' component={App} />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
