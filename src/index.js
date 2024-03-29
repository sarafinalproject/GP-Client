import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//from Chaya:
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import appReducer from '../src/components/appReducer';
// const appStore=createStore(appReducer);
// const root = ReactDOM.createRoot(document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
</BrowserRouter>

//from Chaya
// root.render( <React.StrictMode>
//   <Provider store={appStore}>
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>
//   </Provider>
//  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
