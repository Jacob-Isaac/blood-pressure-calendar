 import { useSelector } from "react-redux";
 import { selectPressures, selectAverage, selectHighest, selectLowest } from "../Slice/Slice";
 import { nanoid } from "@reduxjs/toolkit";
 import { Task } from "../../common/interfaces";
 import PressureTile from "../../common/Elements/pressureTile";
import {Div} from "../../common/Elements/styled"
import { PressureState } from "../../common/interfaces";
// import { filterListBySelectedDate } from "../Calendar/Calendar";
import { Dayjs } from "dayjs";
interface PressureListProps {
  selectFunction: any;
}
const PressureList = ({ selectFunction }: PressureListProps) => {
// const PressureList = ({ selectFunction }: { selectFunction: (state: {pressureList: PressureState}) => Task[] }) => {
  const pressureData: Task[] = useSelector(selectFunction);
  // Sort the pressureData array based on the date property
  const sortedData = [...pressureData].sort((a, b) => a.date.getTime() - b.date.getTime());
  // Group the data by date
  const groupedData: { [date: string]: Task[] } = {};
  sortedData.forEach((person) => {
    const date = person.date.toDateString(); // Use toDateString to get the date string without the time
    if (!groupedData[date]) {
      groupedData[date] = [];
    }
    groupedData[date].push(person);
  });

  return (
    <div>
      {Object.entries(groupedData).map(([date, group]) => (
        <Div key={date}>
          <div>{date}</div> {/* Render the date as a separate div */}
          <ul className="Box">
            {group.map((person) => (
              <PressureTile key={person.id} person={person} />
            ))}
          </ul>
        </Div>
      ))}
    </div>
  );
};

const List = () => {
     return <PressureList  selectFunction ={selectPressures}/>;
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

  //  const ListCalendar = () => {
  //   return <PressureList selectFunction={filterListBySelectedDate}/>;
  // };
  
   export { List, ListAverage, ListHighest, ListLowest};
   export default PressureList;
  