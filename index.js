import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import SkillsAppReducer from './reducers/skillsApp'
import './index.sass';

// main app
import App from './containers/App';

const middlewares = [createLogger()];

let store = createStore(SkillsAppReducer, composeWithDevTools(applyMiddleware(...middlewares)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
App
