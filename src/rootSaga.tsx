import {all} from "redux-saga/effects";
import { pressureSaga } from "../src/components/Saga/Saga";


export default function* rootSaga() {
    yield all([
        pressureSaga(),
    ]);
}