import { call, delay, put } from "redux-saga/effects";
import api from "../../services/api";
import { Types } from "../ducks/File";

export function* addFileSaga(action) {
  try {
    const res = yield call(
      api.post,
      `/box/${action.payload.id}/file`,
      action.payload.data
    );
    yield put({ type: Types.addSuccessFile, data: res.data });
  } catch {
    yield put({ type: Types.addFailFile });
  }
}
