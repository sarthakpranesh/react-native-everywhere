import { combineReducers } from 'redux'

const INITIAL_STATE = {
  counter: 0,
}

// action types
const UPDATE = 'UPDATE';

const defaultReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, counter: action.payload }
    default:
      return state
  }
}

export default defaultReducer;

export const incrementCounter = () => {
    return (dispatch: any, getState: any) => {
        const state = getState();
        dispatch({
            type: UPDATE,
            payload: state.default.counter + 1
        })
    }
}

export const decrementCounter = () => {
    return (dispatch: any, getState: any) => {
        const state = getState();
        dispatch({
            type: UPDATE,
            payload: state.default.counter - 1
        })
    }
}
