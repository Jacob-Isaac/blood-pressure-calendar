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
      date: new Date(),
    },
    {
      id: "2",
      up: 148,
      down: 95,
      pulse: 78,
      note: "mierzone w ciągu dnia",
      date: new Date(),
    },
    {
      id: "3",
      up: 128,
      down: 94,
      pulse: 87,
      note: "mierzone w ciągu dnia",
      date: new Date('1988-03-21'),
    },],
    highestPressure: [],
    averagePressure: [],
    lowestPressure: [],
    isTaskHide: false,
    isLoading: false,
    color: "",
    arrayType: "",
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
      state.arrayType = "highestPressure";
    },
    showAverage: (state, action: PayloadAction<Task>) => {
      state.averagePressure.push(action.payload);
      state.averagePressure = [action.payload];
      console.log(state.isLoading);
      state.arrayType = "highestPressure";
    },
    showLowest: (state, action: PayloadAction<Task>) => {
      state.lowestPressure.push(action.payload);
      state.lowestPressure = [action.payload];
      console.log(state.isLoading);
      state.arrayType = "highestPressure";
    },
  },
});

export const {
  addTask,
  setLoading,
  showHighest,
  showAverage,
  showLowest,
} = pressureSlice.actions;

export const selectPressures = (state: { pressureList: PressureState }) => state.pressureList.pressureList;
export const selectHighest = (state: { pressureList: PressureState }) => state.pressureList.highestPressure;
export const selectAverage = (state: { pressureList: PressureState }) => state.pressureList.averagePressure;
export const selectLowest = (state: { pressureList: PressureState }) => state.pressureList.lowestPressure;
export const arrayType = "";
export default pressureSlice.reducer;

