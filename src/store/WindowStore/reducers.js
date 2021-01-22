import {IS_REARY} from './actions.js'

const defaultState = {
  isReady: false,
}

export const scrollReducer = (state = defaultState, action) => {
  switch (action.type) {

    case IS_REARY:
      return{
        ...state,
        isReady: action.payload
      }
    default:
      break
  }
  return state;
}