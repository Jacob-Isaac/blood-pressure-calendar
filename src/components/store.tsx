import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./Slice";

const store = configureStore({
  reducer: {
    pressureList: taskListReducer,
  }
});

export default store;
