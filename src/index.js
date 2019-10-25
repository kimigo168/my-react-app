import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/'
import store from '@/store'
import App from './App';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import FastClick from 'fastclick'
import './utils/setRem'
import './style/base.css'

FastClick.attach(document.body)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}

render(Route)

// ReactDOM.render(<App />, document.getElementById('root'));
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
