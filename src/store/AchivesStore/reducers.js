import {SET_TIMER, SET_HINTS} from './actions.js'

const defaultState = {
  timerInterval: null,
  hints: [
    {
      id: 1,
      label: '',
      isChecked: false,
      content: {
        title: 'A cat. Hmmm...',
        body: 'Cats are lazy, but they are Svelte'
      }
    },
    {
      id: 2,
      label: '',
      isChecked: false,
      content: {
        title: "I see a beautiful view from the window",
        body: "View... View... Vue"
      }
    },
    {
      id: 3,
      label: '',
      isChecked: false,
      content: {
        title: 'A cup. There was some coffee in it',
        body: 'Need more cofee'
      }
    },
    {
      id: 4,
      label: '',
      isChecked: false,
      content: {
        title: 'HTML',
        body: 'What does he know about HTML?'
      }
    },
    {
      id: 5,
      label: '',
      isChecked: false,
      content: {
        title: 'Visual Studio Code',
        body: 'Programming language is JavaScript. Operating system is Linux'
      }
    },
    {
      id: 6,
      label: '',
      isChecked: false,
      content: {
        title: '{} Css',
        body: 'Css / SASS'
      }
    },
    {
      id: 7,
      label: '',
      isChecked: false,
      content: {
        title: 'A plant',
        body: 'The plant is growing up'
      }
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