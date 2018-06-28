import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './components/App'
import reducers from './reducers'

// used for debugging email sending
// import axios from 'axios'
// window.axios = axios

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(app, document.querySelector('#root'))
