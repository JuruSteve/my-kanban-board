import {
  SHOW_ITEMS,
  SHOW_ITEMS_SUCCESS,
  SHOW_ITEMS_FAILED,
} from "../constants";

const initialState = {
  boards: [],
  loading: false,
  errors: false,
  errorMessages: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ITEMS:
      return {
        ...state,
        loading: true,
      };

    case SHOW_ITEMS_SUCCESS:
      return {
        ...state,
        boards: action.payload.boards,
        loading: false,
      };

    case SHOW_ITEMS_FAILED:
      return {
        ...state,
        loading: false,
        errors: true,
        errorMessages: [...action.payload.error],
      };

    default:
      return state;
  }
};
