import {SET_PAGE_SECTION, SET_CURRENT_PAGE_SECTION} from './actions.js'

const defaultState = {
  pageSection: ['intro', 'room', 'contacts'],
  pageCurrentSection: 'intro'
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
    default:
      break
  }
  return state;
}