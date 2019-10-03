import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import configureStore from '../store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>React Works!</h1>, root);
})
