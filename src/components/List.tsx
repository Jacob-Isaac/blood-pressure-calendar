import React from "react";
import { useSelector } from "react-redux/es/exports";
import { selectTasks } from "./Slice";
import { nanoid } from "@reduxjs/toolkit";
import { Task } from "./interfaces";

const List = () => {
  const pressureList: Task[] = useSelector(selectTasks);
  const renderList = (): JSX.Element[] => {
    return pressureList.map((person) => {
      const key = nanoid();
      let imgClass = "List-img";
      imgClass = person.up > 160 ? "List-img-violet" :
           person.up > 150 ? "List-img-red" :
           person.up > 140 ? "List-img-orange" :
           person.up > 130 ? "List-img-yellow" :
           imgClass;
      return (
        <li key={key} className="List">
          <div className="List-order">
            <div className="List-title">
            🩸 Blood Pressure
            </div>
            <div className="List-pressScore">
              <div className="List-upperText">Highest</div>
              <div className="List-middleText">{person.up}</div>
              <div className="List-bottomText">mmHg</div>
            </div>
            <div>/</div>
            <div className="List-pressScore">
              <div className="List-upperText">Lowest</div>
              <div className="List-middleText">{person.down}</div>
              <div className="List-bottomText">mmHg</div>
            </div>
            <div className="List-pulseScore">
              <div className="List-upperPulseText">Pulse</div>
              <div className="wrapper"><div>❤️</div>
                <div className="List-middleText">{person.pulse}</div></div>
              <div className="List-bottomPulseText">BPM</div>
            </div>
          </div>
          <div className={imgClass}></div>
          {/* {person.note} */}
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
