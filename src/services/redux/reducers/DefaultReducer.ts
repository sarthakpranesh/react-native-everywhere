import { combineReducers } from 'redux'

/**
 * Action types
 * All the actions defined here will be implemented in reducer,
 * this way it's easier to manage action type strings
 */
const INCREMENT = "increment";
const DECREMENT = "decrement";

// initial state of the reducer
const INITIAL_STATE = {
  counter: 0,
}

// reducer
const defaultReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: ++state.counter }
    case DECREMENT:
      return { ...state, counter: --state.counter }
    default:
      return state
  }
}

export default combineReducers({
  default: defaultReducer
})

// reducer actions
export const increment = () => ({
    type: INCREMENT,
})
export const decrement = () => ({
    type: DECREMENT,
})
