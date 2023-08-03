const initialState = {
  activeButton: 1,
  activeBurgerButton: false,
  fadeOut: false,
  hidePreloader: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ACTIVE_BUTTON":
      return {
        ...state,
        activeButton: payload,
      };
    case "ACTIVE_BURGER_BUTTON":
      return {
        ...state,
        activeBurgerButton: payload,
      };
    case "FADE_OUT":
      return {
        ...state,
        fadeOut: payload,
      };
    case "HIDE_PRELOADER":
      return {
        ...state,
        hidePreloader: payload,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
