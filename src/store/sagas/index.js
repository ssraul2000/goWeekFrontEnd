import { takeEvery, takeLatest, all } from "redux-saga/effects";
import { Types } from "../ducks/Box";
import { sagaAddBox } from "./Box";

export default function* root() {
  yield all([takeLatest(Types.addBox, sagaAddBox)]);
}
