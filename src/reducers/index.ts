import { combineReducers } from 'redux'

// importing reducers
import DefaultReducer from './DefaultReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  default: DefaultReducer
})

export default rootReducer
