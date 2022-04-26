import React from 'react'

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import Header from '../components/Header'

import reducers from '../reducers'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

let composeEnhancers = compose

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }
}

const store = createStore(reducers, composeEnhancers())

function App({ Component, pageProps }) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps}></Component>{' '}
      </Provider>
    </MuiThemeProvider>
  )
}

export default App
