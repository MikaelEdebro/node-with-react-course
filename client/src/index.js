import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(app, document.querySelector('#root'))

console.log('STRIPE KEY', process.env.REACT_APP_STRIPE_KEY)
console.log('NODE_ENV', process.env.NODE_ENV)
