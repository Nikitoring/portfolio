import {BIND_SCROLL_Y, IS_REARY, HAS_SCROLL} from './actions.js'

const defaultState = {
  scrollY: 0,
  isReady: false,
  isHasScroll: false
}

export const scrollReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BIND_SCROLL_Y:
      return {
        ...state,
        scrollY: action.payload
      }
    case IS_REARY:
      return{
        ...state,
        isReady: action.payload
      }
    case HAS_SCROLL:
      return {
        ...state,
        isHasScroll: action.payload
      }
    default:
      break
  }
  return state;
}