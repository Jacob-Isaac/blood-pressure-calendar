import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskListState } from "./interfaces";

const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    pressureList: [ {
      id: "1",
      up: 138,
      down: 75,
      pulse: 68,
      note: "mierzone rano",

    },
    {
      id: "2",
      up: 148,
      down: 95,
      pulse: 78,
      note: "mierzone w ciągu dnia",

    },],
    isTaskHide: false,
    isLoading: false,
    color: "",
  } as TaskListState,

  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.pressureList.push(action.payload);
    },
   // setColor: "yellow"    state.color = "yellow";
  },
});

export const {
  addTask,
} = taskListSlice.actions;

export const selectTasks = (state: { pressureList: TaskListState }) => state.pressureList.pressureList;

export default taskListSlice.reducer;
