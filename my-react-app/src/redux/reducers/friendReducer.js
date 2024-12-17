import { TOGGLE_FRIEND } from "../actions/frinedActions"

const initalState = {
  idx: -1,
};

const friendReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_FRIEND:
      return {
        ...state,
        idx: action.payload.idx,
      };
    default:
      return state;
  }
};

export default friendReducer;