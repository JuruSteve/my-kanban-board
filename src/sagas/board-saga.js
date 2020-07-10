import { delay } from "./index";
import { store } from "../store";
import { put, call } from "redux-saga/effects";
import { showItemsSuccess, showItemsFailed } from "../actions";

export function* fetchBoards() {
  try {
    // mock kanban data
    const boards = yield store;
    // mimics network request
    yield call(delay, 300);
    yield put(showItemsSuccess(boards));
  } catch (error) {
    yield put(showItemsFailed());
  }
}
