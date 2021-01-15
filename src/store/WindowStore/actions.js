export const BIND_SCROLL_Y = "SCROLL_Y";
export const IS_REARY = "IS_READY";
export const HAS_SCROLL = "HAS_SCROLL";

export const setScrollY = (scroll) => ({
  type:BIND_SCROLL_Y,
  payload: scroll
})

export const setReady = (ready) => ({
  type:IS_REARY,
  payload: ready
})

export const setHasScrolled = (isScroll)=>({
  type: HAS_SCROLL,
  payload: isScroll
})