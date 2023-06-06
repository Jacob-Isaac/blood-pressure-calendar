import { useSelector } from "react-redux";
import { selectPressures, selectAverage, selectHighest, selectLowest } from "../Slice/Slice";
import { nanoid } from "@reduxjs/toolkit";
import { Task } from "../../common/interfaces";
import PressureTile from "../../common/Elements/pressureTile";

const PressureList = ({ selectFunction }: { selectFunction: any}) => {
  const pressureData: Task[] = useSelector(selectFunction);

  return (
    <div>
      <ul className="Box">
        {pressureData.map((person) => (
          <PressureTile key={nanoid()} person={person} />
        ))}
      </ul>
    </div>
  );
};
const List = () => {
  return <PressureList selectFunction={selectPressures}/>;
};

const ListAverage = () => {
  return <PressureList selectFunction={selectAverage}/>;
};

const ListHighest = () => {
  return <PressureList selectFunction={selectHighest} />;
};

const ListLowest = () => {
  return <PressureList selectFunction={selectLowest} />;
};

export { List, ListAverage, ListHighest, ListLowest };