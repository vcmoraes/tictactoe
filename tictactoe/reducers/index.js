import { combineReducers } from 'redux'
import HomeReducer from './HomeReducer'

const rootReducer = combineReducers({ homeData: HomeReducer })

export default rootReducer
