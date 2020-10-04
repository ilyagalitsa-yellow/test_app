import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import store from 'store'
import App from './components/App'

const div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.appendChild(div);

const render = (color: string) => {
  ReactDOM.render((
    <Provider store={store}>
      <App color={color} />
    </Provider>
  ), document.getElementById('root'))
}

window.init = (color: string) => {
  render(color);
}

declare global {
  interface Window { init: any }
}