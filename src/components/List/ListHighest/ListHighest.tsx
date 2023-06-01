import { useSelector } from "react-redux/es/exports";
import { selectHighest } from "../../Slice/Slice";
import { nanoid } from "@reduxjs/toolkit";
import { Task } from "../../../common/interfaces";
import { useColorHook } from "../../../common/colorHook";
import { Status, Tile, Wrapper, Title,TitleWrapper, IconBlood, PressureResult, UpperText, MiddleText, BottomText, PulseResult, UpperPulseText, MiddlePulseText, PulseWrapper, BottomPulseText} from "../styled";

const List = () => {
  const highestPressure: Task[] = useSelector(selectHighest);
  const getColorClass = useColorHook();

  const renderList = (): JSX.Element[] => {
    return highestPressure.map((person) => {
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