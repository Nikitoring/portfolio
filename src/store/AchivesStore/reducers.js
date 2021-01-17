import {SET_TIMER, SET_HINTS} from './actions.js'

const defaultState = {
  timerInterval: null,
  hints: [
    {
      id: 1,
      label: '',
      isChecked: false
    },
    {
      id: 2,
      label: '',
      isChecked: false
    },
    {
      id: 3,
      label: '',
      isChecked: false
    },
    {
      id: 4,
      label: '',
      isChecked: false
    },
    {
      id: 5,
      label: '',
      isChecked: false
    },
    {
      id: 6,
      label: '',
      isChecked: false
    },
    {
      id: 7,
      label: '',
      isChecked: false
    }
  ]
}

export const achivesReducers = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TIMER:
      return {
        ...state,
        timerInterval: action.payload
      }
    case SET_HINTS:
      return{
        ...state,
        hints: action.payload
      }
    default:
      break
  }
  return state;
}