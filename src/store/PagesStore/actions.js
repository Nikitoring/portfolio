export const SET_CURRENT_PAGE_SECTION = "SET_CURRENT_PAGE_SECTION";
export const SET_PAGE_SECTION = "SET_PAGE_SECTION";
export const SET_ANIMATION = "SET_ANIMATION"
export const setCurrentPageSection = (current) => ({
  type:SET_CURRENT_PAGE_SECTION,
  payload: current
})

export const setPageSection = (section) => ({
  type:SET_PAGE_SECTION,
  payload: section
})

export const setAnimation = (isAnimation)=> ({
  type:SET_ANIMATION,
  payload: isAnimation
})