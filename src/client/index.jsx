import React from 'react';
import {render} from 'react-dom';
import Landing from '../common/components/landing/Landing';
import {createStore,applyMiddleware} from 'redux';
import {rootReducer} from '../common/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import ApiMiddleware from '../common/utilities/ApiMiddleware';

let store=createStore(rootReducer,{},applyMiddleware(thunk,ApiMiddleware));

render(
  <Provider store={store}>
    <Landing/>
</Provider>,
  document.getElementById('app')
);
