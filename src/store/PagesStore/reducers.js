import {SET_PAGE_SECTION, SET_CURRENT_PAGE_SECTION, SET_ANIMATION} from './actions.js'

const defaultState = {
  isAnimation: false,
  pageSection: ['intro', 'room', 'contacts'],
  pageCurrentSection: false
}

export const pagesReducers = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGE_SECTION:
      return {
        ...state,
        pageSection: [...state.pageSection, action.payload]
      }
    case SET_CURRENT_PAGE_SECTION:
      return{
        ...state,
        pageCurrentSection: action.payload
      }
    case SET_ANIMATION:
      return{
        ...state,
        isAnimation: action.payload
      }
    default:
      break
  }
  return state;
}