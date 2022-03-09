import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{
  BrowserRouter as Router
} from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
// import cameraReducer from './reducers/cameraReducer.js'
// import photoReducer from './reducers/photoReducer.js';
import rootReducer from './reducers/index';


const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
