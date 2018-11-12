import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
import Home from './containers/Home'

const stores = configureStore()

const ReduxApp = () => {
  return (
    <Provider store={stores}>
      <Home />
    </Provider>
  )
}

export default ReduxApp
