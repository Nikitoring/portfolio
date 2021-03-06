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
        body: 'The cat is...',
        variants: [
          {
            id: 1,
            value: 'lazy'
          },
          {
            id: 2,
            value: 'crazy'
          },
          {
            id: 3,
            value: 'hungry'
          },
          {
            id: 4,
            value: 'svelte'
          },
        ],
        trueAnswer: 4
      }
    },
    {
      id: 2,
      label: '',
      isChecked: false,
      isFound: false,
      type: 'question',
      content: {
        title: "A beautiful view from the window...",
        body: "He can work with",
        variants: [
          {
            id: 1,
            value: 'view js'
          },
          {
            id: 2,
            value: 'vju js'
          },
          {
            id: 3,
            value: 'vue js'
          },
          {
            id: 4,
            value: 'vueue js'
          },
        ],
        trueAnswer: 3
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
        ],
        trueAnswer: 1
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
        body: 'What does it mean?',
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
        ],
        trueAnswer: 1
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
      type: 'dragAndDrop',
      content: {
        title: 'Css',
        body: 'Arrange the blocks in the correct order to get a layout'
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