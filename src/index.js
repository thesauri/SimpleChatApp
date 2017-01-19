import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const styles = {
  height: "100%",
  margin: 20
}

ReactDOM.render(
  <App style={styles} />,
  document.getElementById('root')
);
