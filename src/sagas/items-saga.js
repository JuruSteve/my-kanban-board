import uuid from "uuid/v4";
import { delay } from "./index";
import { put, call } from "redux-saga/effects";
import { addItemFailed, addItemSuccess } from "../actions";

export function* addItemToBoard({ payload: { formValues, boardId } }) {
  try {
    //   mimic network request
    yield call(delay, 100);
    const newItem = { ...formValues, id: uuid() };
    yield put(addItemSuccess({ newItem, boardId }));
  } catch (error) {
    yield put(addItemFailed());
  }
}
