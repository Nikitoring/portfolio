import {SET_TIMER, SET_HINTS} from './actions.js'

const defaultState = {
  timerInterval: null,
  hints: [
    {
      id: 1,
      label: '',
      isChecked: false,
      content: {
        title: 'The cat. Hmmm... ',
        body: 'All cats are lazy, but they are Svelte!'
      }
    },
    {
      id: 2,
      label: '',
      isChecked: false,
      content: {
        title: "I'm watching beatiful view from window",
        body: "View... View... VUE!"
      }
    },
    {
      id: 3,
      label: '',
      isChecked: false,
      content: {
        title: 'The cup. There was cofee',
        body: 'Need more cofee. Everything is clear'
      }
    },
    {
      id: 4,
      label: '',
      isChecked: false,
      content: {
        title: 'HTML',
        body: 'What He knows about HTML?'
      }
    },
    {
      id: 5,
      label: '',
      isChecked: false,
      content: {
        title: 'Ok. There is open Visual Studio Code',
        body: 'Code was write on JavaScript. Operating system is Linux'
      }
    },
    {
      id: 6,
      label: '',
      isChecked: false,
      content: {
        title: '{} ? Css',
        body: 'Ooo! Css and Scss'
      }
    },
    {
      id: 7,
      label: '',
      isChecked: false,
      content: {
        title: 'The plant',
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