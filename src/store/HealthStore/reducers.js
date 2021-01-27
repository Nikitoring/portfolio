import {SET_MISTAKE} from './actions.js'

const defaultState = {
  health: 0
}

export const healthReducers = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MISTAKE:
      return {
        health: action.payload
      }
    default:
      break
  }
  return state;
}