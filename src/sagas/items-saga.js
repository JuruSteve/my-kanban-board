import { v4 as uuidv4 } from "uuid";
import { delay } from "./index";
import { put, call, takeEvery } from "redux-saga/effects";
import { addItemFailed, addItemSuccess } from "../actions";
import { ADD_ITEM_FAILED } from "../constants";

export function* throwError() {
  console.log("throwing error");
}

export function* addItemToBoard({ payload: { formValues, boardId } }) {
  try {
    //   mimic network request
    yield call(delay, 100);
    const newItem = { ...formValues, id: uuidv4() };
    yield put(addItemSuccess({ newItem, boardId }));
    yield takeEvery(ADD_ITEM_FAILED, throwError);
  } catch (error) {
    yield put(addItemFailed());
  }
}
