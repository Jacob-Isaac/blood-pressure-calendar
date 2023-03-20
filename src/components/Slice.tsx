import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string,
  up: number;
  down: number;
  pulse: number;
  note?: string;
}

interface TaskListState {
  pressureList: Task[];
  isTaskHide: boolean;
  ifLoading: boolean;
}

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
    ifLoading: false,
  } as TaskListState,

  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.pressureList.push(action.payload);
    },
  },
});

export const {
  addTask,
} = taskListSlice.actions;

export const selectTasks = (state: { pressureList: TaskListState }) => state.pressureList.pressureList;

export default taskListSlice.reducer;
