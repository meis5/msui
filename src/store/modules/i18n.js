// Constants
// --------------------------------------------------
export const UPDATE_LOCALE = 'UPDATE_LOCALE'

// Actions
// --------------------------------------------------
export const updateLocale = locale => ({
  type: UPDATE_LOCALE,
  payload: locale,
})

// Reducer
// --------------------------------------------------
export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LOCALE:
      return { ...state, locale: action.payload }
    default:
      return state
  }
}
