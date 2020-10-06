import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from 'store';
import App from './components/App';
import { View } from './entities/View';

const render = ({ color = '', view = View.FULL }) => {
  ReactDOM.render((
    <Provider store={store}>
      <App color={color} view={view} />
    </Provider>
  ), document.getElementById('root'));
};

let rightRoot = document.getElementById('root');

if (!rightRoot) {
  const div = document.createElement('div');
  div.setAttribute('id', 'root');
  document.body.appendChild(div);
  window.init = (data: object) => {
    // const newData = { color: data['color'], view: data['view']};
    render(data);
  };
} else {
  render({});
}

declare global {
  interface Window { init: Function; }
}

