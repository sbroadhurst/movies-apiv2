import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import reducers from './reducers'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { blue800, amber50 } from 'material-ui/styles/colors'
import registerServiceWorker from './registerServiceWorker'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: amber50
  },
  tabs: {
    backgroundColor: blue800
  }
})



let composeEnhancers = compose



if (process.env.NODE_ENV === 'development') {
  const composeWithDevToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }
}

const store = createStore(reducers, composeEnhancers())

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider></MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
