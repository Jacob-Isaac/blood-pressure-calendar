import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, PressureState } from "../../common/interfaces";

const pressureSlice = createSlice({
  name: "pressureList",
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
  } as PressureState,

  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.isLoading = true;
      state.pressureList.push(action.payload);
      console.log(state.isLoading);
    },
    setLoading: (state) => {
      state.isLoading = false;
      console.log(state.isLoading);
    },
  },
});

export const {
  addTask,
  setLoading
} = pressureSlice.actions;

export const selectPressures = (state: { pressureList: PressureState }) => state.pressureList.pressureList;

export default pressureSlice.reducer;
