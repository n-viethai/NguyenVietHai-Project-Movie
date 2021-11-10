const stateDefault = {
  isModal: false,
  linkModal: " ",
};

export const HomeModalReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SET_HOME_MODAL_ON": {
      state.isModal = true;
      state.linkModal = action.linkModal;
      return { ...state };
    }
    case "SET_HOME_MODAL_OFF": {
      state.isModal = false;
      state.linkModal = " ";
      return { ...state };
    }
    default:
      return { ...state };
  }
};
