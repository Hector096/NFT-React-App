import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import { Provider } from 'react-redux';
import AlertTemplate from 'react-alert-template-basic';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import store from './redux/store';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MetaMaskProvider } from './hooks/metamask';

function getLibrary(provider) {
  return new Web3(provider);
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AlertProvider template={AlertTemplate}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <MetaMaskProvider>
            <App />
          </MetaMaskProvider>

        </Web3ReactProvider>
      </AlertProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
