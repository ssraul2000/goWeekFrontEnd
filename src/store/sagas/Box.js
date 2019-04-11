import { call, delay, put } from "redux-saga/effects";
import api from "../../services/api";
import { Types } from "../ducks/Box";
function createBox(title) {
  return api.post("/box", { title });
}
export function* sagaAddBox(action) {
  try {
    yield delay(3000);
    const res = yield call(createBox, action.payload.title);
    yield put({ type: Types.successBox, payload: { data: res.data } });
  } catch {
    yield put({ type: Types.failBox });
  }
}
