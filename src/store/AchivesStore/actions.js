export const SET_TIMER = "SET_TIMER";
export const SET_HINTS = "SET_HINTS";

export const setTimer = (time) => ({
  type:SET_TIMER,
  payload: time
})

export const setHints = (hint) => ({
  type:SET_HINTS,
  payload: hint
})
