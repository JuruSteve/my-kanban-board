import { all, takeEvery, takeLatest, call, take } from "redux-saga/effects";
import {
  SHOW_ITEMS,
  ADD_ITEM,
  ADD_ITEM_FAILED,
  // SHOW_ITEMS_SUCCESS,
  // SHOW_ITEMS_FAILED,
  //   ADD_ITEM,
  //   EDIT_ITEM,
  //   REMOVE_ITEM,
  //   MOVE_ITEM,
} from "../constants";
import { fetchBoards } from "./board-saga";
import { addItemToBoard, throwError } from "./items-saga";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* watchBoardSaga() {
  yield take(SHOW_ITEMS);
  yield call(fetchBoards);
}

function* watchItemsSaga() {
  yield takeEvery(ADD_ITEM, addItemToBoard);
  yield take(ADD_ITEM_FAILED);
  yield call(throwError);
}

export default function* rootSaga() {
  yield all([watchBoardSaga(), watchItemsSaga()]);
}
