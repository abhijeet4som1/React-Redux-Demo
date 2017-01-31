import React from 'react';
import {render} from 'react-dom';
import Landing from '../common/components/landing/Landing';
import {createStore} from 'redux';
import {rootReducer} from '../common/reducers/rootReducer';
import {Provider} from 'react-redux';

let store=createStore(rootReducer,{});

render(
  <Provider store={store}>
    <Landing/>
</Provider>,
  document.getElementById('app')
);
