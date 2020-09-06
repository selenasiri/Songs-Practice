import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import store from './store'
import { Provider } from 'react-redux'
//Allows redux to hook with React. Used by provider and hooks using dispatch.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
