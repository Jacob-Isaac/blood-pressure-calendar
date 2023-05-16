// import {
//   call,
//   delay,
//   put,
//   select,
//   takeLatest,
// } from "redux-saga/effects";
// import { addTask, selectTasks, setLoading } from "../Slice/Slice";
// import { saveInLocalStorage } from "../../common/localStorage";


// function* saveInLocalStorageWorker() {
//   try {
//     yield delay(1000);
//     const taskList = yield select(selectTasks);
//     yield call(saveInLocalStorage, taskList.taskList);
//     yield put(setLoading());
//   } catch (error) {
//     yield call(alert("coś poszło nie tak! Spróbuj później :)"));
//   }
// }



// export function* tasksSaga() {
//   yield takeLatest(addTask.type, saveInLocalStorageWorker);
// }

import {
  call,
  delay,
  put,
  select,
  takeLatest,
  } from "redux-saga/effects";
  import { addTask, selectPressures, setLoading } from "../Slice/Slice";
  import { saveInLocalStorage } from "../../common/localStorage";
  import { Task } from "../../common/interfaces";
  function* saveInLocalStorageWorker() {
  try {
  yield delay(1000);
  const pressureList: Task[] = yield select(selectPressures);
  yield call(saveInLocalStorage, pressureList);
  yield put(setLoading());
  } catch (error) {
  yield call(alert, "coś poszło nie tak! Spróbuj później :)");
  }
  }
  
  export function* pressureSaga() {
  yield takeLatest(addTask.type, saveInLocalStorageWorker);
  }