import { configureStore } from "@reduxjs/toolkit";
import pressuresReducer from "./Slice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../../rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pressureList: pressuresReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
