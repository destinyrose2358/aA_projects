import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./frontend/store/store";
import Root from "./frontend/components/root";
import Selector from "./frontend/reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('main');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, main);
})