import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer)

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
