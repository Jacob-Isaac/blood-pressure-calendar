import { useSelector } from "react-redux/es/exports";
import { selectTasks } from "./Slice";
import { nanoid } from "@reduxjs/toolkit";
import { Task } from "./interfaces";
import { usePressureListImageClass } from "./classHook";

const List = () => {
  const pressureList: Task[] = useSelector(selectTasks);
  const getImageClass = usePressureListImageClass();

  const renderList = (): JSX.Element[] => {
    return pressureList.map((person) => {
      const key = nanoid();
      const imgClass = getImageClass(person);
     // zrobic to jednak jako hook , bo z providerem sie nie uda
           // potem klikamy i sa szczegóły i jest dokladnie kolorami co jest za wysoko
      return (
        <li key={key} className="List">
          <div className="List-order">
            <div className="List-title">
            <div className="wrapper"><div className="bloodWrapper">🩸</div> Blood Pressure
            </div></div>
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
              <div className="heartWrapper"><div>❤️</div>
                <div className="List-middlePulseText">{person.pulse}</div></div>
              <div className="List-bottomPulseText">BPM</div>
            </div>
          </div>
          <div className={imgClass}></div>
          {/* {person.note} */}
        </li>
      );
    });
  };

   return <ul className="Box">{renderList()}</ul>;
};

export default List;


// javascript
// const rangeClasses = {
//   "190,150,150": "List-img-violet",
//   "170,120,120": "List-img-red",
//   "160,100,100": "List-img-orange",
//   "150,90,90": "List-img-papaya",
//   "140,80,80": "List-img-yellow",
//   "130,70,70": "List-img-green",
// };
// typescript
// const getRangeClass = (up: number, down: number, pulse: number): string => {
//   const rangeKey = `${up},${down},${pulse}`;
//   return rangeClasses[rangeKey] ?? "List-img";
// };
// scss
// const imgClass = getRangeClass(person.up, person.down, person.pulse);