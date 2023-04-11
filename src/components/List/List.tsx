import { useSelector } from "react-redux/es/exports";
import { selectTasks } from "../Slice/Slice";
import { nanoid } from "@reduxjs/toolkit";
import { Task } from "../../common/interfaces";
import { useColorHook } from "../../common/colorHook";
import { Status, Tile, Wrapper, Title,TitleWrapper, IconBlood, PressureResult, UpperText, MiddleText, BottomText, PulseResult, UpperPulseText, MiddlePulseText, PulseWrapper, BottomPulseText} from "./styled";

const List = () => {
  const pressureList: Task[] = useSelector(selectTasks);
  const getColorClass = useColorHook();

  const renderList = (): JSX.Element[] => {
    return pressureList.map((person) => {
      const key = nanoid();
      const colorClass = getColorClass(person);
     // zrobic to jednak jako hook , bo z providerem sie nie uda
           // potem klikamy i sa szczegóły i jest dokladnie kolorami co jest za wysoko
      return (
        <Tile key={key}>
          <Wrapper>
            <Title>
            <TitleWrapper><IconBlood>🩸</IconBlood> Blood Pressure
            </TitleWrapper></Title>
            <PressureResult>
              <UpperText>Highest</UpperText>
              <MiddleText>{person.up}</MiddleText>
              <BottomText>mmHg</BottomText>
            </PressureResult>
            <p>/</p>
            <PressureResult>
              <UpperText>Lowest</UpperText>
              <MiddleText>{person.down}</MiddleText>
              <BottomText>mmHg</BottomText>
            </PressureResult>
            <PulseResult>
              <UpperPulseText>Pulse</UpperPulseText>
              <MiddlePulseText><div>❤️</div>
                <PulseWrapper>{person.pulse}</PulseWrapper></MiddlePulseText>
              <BottomPulseText>BPM</BottomPulseText>
            </PulseResult>
          </Wrapper>
          <Status className={colorClass}></Status>
          {/* {person.note} */}
        </Tile>
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