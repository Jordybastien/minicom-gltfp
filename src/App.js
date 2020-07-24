import React, { Component } from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import middleware from './middleware';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <Router />
      </Provider>
    );
  }
}

export default App;
