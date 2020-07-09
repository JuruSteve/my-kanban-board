import {
  SHOW_ITEMS,
  SHOW_ITEMS_SUCCESS,
  SHOW_ITEMS_FAILED,
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILED,
  REMOVE_ITEM,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILED,
  EDIT_ITEM,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_FAILED,
  MOVE_ITEM,
  MOVE_ITEM_SUCCESS,
  MOVE_ITEM_FAILED,
} from "../constants";

export const showItems = () => ({
  type: SHOW_ITEMS,
  payload: { loading: true },
});

export const showItemsSuccess = (items) => {
  return {
    type: SHOW_ITEMS_SUCCESS,
    payload: { loading: false, boards: items },
  };
};

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});
export const EDIT_Item = (itemId) => ({
  type: EDIT_ITEM,
  payload: itemId,
});
export const moveItem = (item) => ({
  type: MOVE_ITEM,
  payload: item,
});
