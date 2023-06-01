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
    highestPressure: [],
    averagePressure: [],
    lowestPressure: [],
    isTaskHide: false,
    isLoading: false,
    color: "",
  } as PressureState,

  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.isLoading = true;
      state.pressureList.push(action.payload);
      console.log(state.isLoading);
      console.log(state.pressureList);
    },
    setLoading: (state) => {
      state.isLoading = false;
      console.log(state.isLoading);
    },
    showHighest: (state, action: PayloadAction<Task>) => {
      state.highestPressure.push(action.payload);
      state.highestPressure = [action.payload];
      console.log(state.isLoading);
    },
  },
});

export const {
  addTask,
  setLoading,
  showHighest
} = pressureSlice.actions;

export const selectPressures = (state: { pressureList: PressureState }) => state.pressureList.pressureList;
export const selectHighest = (state: { pressureList: PressureState }) => state.pressureList.highestPressure;
export const selectAverage = (state: { averagePressure: PressureState }) => state.averagePressure;
export const selectLowest = (state: { lowestPressure: PressureState }) => state.lowestPressure;
export default pressureSlice.reducer;

