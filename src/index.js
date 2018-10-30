import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'typeface-roboto';

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);

if(module.hot){
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, rootEl);
  })
}

registerServiceWorker();

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YmQ4MmRiNDViMjQ1YzJiMzhiOTcxYTgiLCJpYXQiOjE1NDA4OTQxMzMsImV4cCI6MTU0MTc1ODEzM30.eUlxXFCbl7gn86T-2zAxKR6iKHSoF9T-Y8rMQZ93A5E