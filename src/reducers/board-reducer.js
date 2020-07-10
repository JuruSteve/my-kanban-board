import {
  SHOW_ITEMS,
  SHOW_ITEMS_SUCCESS,
  SHOW_ITEMS_FAILED,
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
} from "../constants";

const initialState = {
  boards: [],
  loading: false,
  errors: false,
  errorMessages: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ITEMS:
      return {
        ...state,
        loading: true,
      };

    case SHOW_ITEMS_SUCCESS:
      return {
        ...state,
        boards: payload.boards,
        loading: false,
      };

    case SHOW_ITEMS_FAILED:
      return {
        ...state,
        loading: false,
        errors: true,
        errorMessages: [...payload.error],
      };

    case ADD_ITEM:
      return {
        ...state,
      };

    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        boards: {
          ...state.boards,
          [payload.boardId]: {
            ...state.boards[payload.boardId],
            items: [...state.boards[payload.boardId].items, payload.newItem],
          },
        },
      };
    default:
      return state;
  }
};
