export const SET_TIMER = "SET_TIMER";
export const SET_HINTS = "SET_HINTS";
export const SET_COUNTER = "SET_COUNTER"

export const setTimer = (time) => ({
  type:SET_TIMER,
  payload: time
})

export const setHints = (hint) => ({
  type:SET_HINTS,
  payload: hint
})

export const setCounter = (count) => ({
  type:SET_COUNTER,
  payload: count
})
