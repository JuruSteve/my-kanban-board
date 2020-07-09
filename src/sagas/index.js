import { all, takeLatest, put, call, take } from "redux-saga/effects";
import {
  SHOW_ITEMS,
  SHOW_ITEMS_SUCCESS,
  SHOW_ITEMS_FAILED,
  //   ADD_ITEM,
  //   EDIT_ITEM,
  //   REMOVE_ITEM,
  //   MOVE_ITEM,
} from "../constants";
import { showItems, showItemsSuccess } from "../actions";
import { store } from "../store";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchBoards() {
  console.log("fetching boards");
  // mock kanban data
  const boards = yield store;
  // mimics network request
  yield call(delay, 1000);
  yield put(showItemsSuccess(boards));
}

function* watchBoardSaga() {
  yield take(SHOW_ITEMS);
  yield call(fetchBoards);
}

export default function* rootSaga() {
  yield all([watchBoardSaga()]);
}
