import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginState from './States/LoginState';
import eventState from './States/EventState';
import App from './App';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout/SCSS/output.css';

const rootReducer = combineReducers({
  loginState: loginState,
  eventState: eventState 
});

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
