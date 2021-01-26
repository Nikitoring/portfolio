import {SET_TIMER, SET_HINTS,SET_COUNTER} from './actions.js'

const defaultState = {
  timerInterval: null,
  counter: 0,
  hints: [
    {
      id: 1,
      label: '',
      isChecked: false,
      isFound: false,
      type: 'question',
      content: {
        title: 'A cat. Hmmm...',
        body: 'Cats are lazy, but they are Svelte'
      }
    },
    {
      id: 2,
      label: '',
      isChecked: false,
      isFound: false,
      type: 'information',
      content: {
        title: "I see a beautiful view from the window",
        body: "View... View... Vue"
      }
    },
    {
      id: 3,
      label: '',
      isChecked: false,
      isFound: false,
      type: 'question',
      content: {
        title: `What's in the cup?`,
        // body: 'Need more cofee',
        variants: [
          {
            id: 1,
            value: 'Coffee'
          },
          {
            id: 2,
            value: 'Vodka'
          },
          {
            id: 3,
            value: 'Lemonade'
          },
          {
            id: 4,
            value: 'A cockroach'
          },
        ]
      }
    },
    {
      id: 4,
      label: '',
      isChecked: false,
      isFound: false,
      type: 'question',
      content: {
        title: 'HTML',
        body: 'What does he know about HTML?',
        variants: [
          {
            id: 1,
            value: 'HyperText Markup Language'
          },
          {
            id: 2,
            value: 'Harrypotter Took My Letters'
          },
          {
            id: 3,
            value: 'Hot Tomatos May Love'
          },
          {
            id: 4,
            value: 'How To Make Lollipops'
          },
        ]
      }
    },
    {
      id: 5,
      label: '',
      isChecked: false,
      isFound: false,
      type: 'terminal',
      terminalValue: '',
      content: {
        title: 'Visual Studio Code',
        body: 'Programming language is JavaScript. Operating system is Linux'
      }
    },
    {
      id: 6,
      label: '',
      isChecked: false,
      isFound: false,
      type: 'drag-drop',
      content: {
        title: '{} Css',
        body: 'Css / SASS'
      }
    },
    {
      id: 7,
      label: '',
      isChecked: false,
      isFound: false,
      type: 'information',
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
    case SET_COUNTER:
      return{
        ...state,
        counter:  action.payload
      }
    default:
      break
  }
  return state;
}