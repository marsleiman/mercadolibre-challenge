import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import initialStore from './initialStore';
import reducer from './reducers';
  
const store = createStore(reducer, 
    initialStore, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
);

export default store;