import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";


export interface IPressure {
  pressure: {
    up: number;
    down: number;
    pulse: number;
    note?: string;
  }[];
}

function App() {

  const [pressure, setPressure] = useState<IPressure["pressure"]>([
      {
      up: 138,
      down: 75,
      pulse: 68,
      note: "mierzone rano",

    },
    {
      up: 148,
      down: 95,
      pulse: 78,
      note: "mierzone w ciągu dnia",

    },
  ]);

  return (
    <div className="App">
      <h1>My blood pressure control panel</h1>
      <List pressure={pressure}/>
      <AddToList pressure={pressure} setPressure={setPressure}></AddToList>
    </div>
  );
}

export default App;
