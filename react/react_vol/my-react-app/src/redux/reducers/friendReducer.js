import { TOGGLE_FRIEND, PROFILE_FRIEND } from "../actions/friendActions"

const initialState = {
  idx: -1,
  profileIdx: false,
};

export const friendReducer = (state = initialState, action) => {
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

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_FRIEND:
      return {
        ...state,
        profileIdx: !state.profileIdx,
      };
    default:
      return state;
  }
};
