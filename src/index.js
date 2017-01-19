import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './Routes';
import { browserHistory } from 'react-router';
import './index.css';

const styles = {
  height: "100%",
  margin: 20
}

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
