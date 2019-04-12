import { takeEvery, takeLatest, all } from "redux-saga/effects";
import Types from "../ducks/Types";
import { sagaAddBox } from "./Box";
import { addFileSaga } from "./File";
export default function* root() {
  yield all([
    takeLatest(Types.addBox, sagaAddBox),
    takeLatest(Types.addFile, addFileSaga)
  ]);
}
