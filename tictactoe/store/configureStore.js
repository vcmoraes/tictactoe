import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const configureStore = () => {
  let store = createStore(reducers, applyMiddleware(thunk))
  return store
}

export default configureStore
