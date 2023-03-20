import React from "react"; 
import { useSelector } from "react-redux/es/exports";
import { selectTasks} from "./Slice";
import { nanoid } from "@reduxjs/toolkit";

interface Task {
    id: string;
    up: number;
    down: number;
    pulse: number;
    note?: string;
  }

  const List = () => {
    const pressureList: Task[] = useSelector(selectTasks);
const renderList = (): JSX.Element[] => {
    return pressureList.map((person) => {
        const key = nanoid();
        return (
        <li key={key} className="List">
            <div className="List-header">
                <h2>{person.up}</h2><h2>/</h2>
                <h2>{person.down}</h2>
            </div>
            <p>{person.pulse}</p>
            <p className="List-note">{person.note}</p>
        </li>
        );
    });
};

return (
    <ul>
    {renderList()}
    </ul>
    );

};


export default List;