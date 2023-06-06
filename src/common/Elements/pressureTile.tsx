import React from "react";
import { Task } from "../../common/interfaces";
import { useColorHook } from "../../common/Hooks/colorHook";
import {
  Tile,
  Title,
  Status,
  TitleWrapper,
  IconBlood,
  PressureResult,
  UpperText,
  MiddleText,
  BottomText,
  PulseResult,
  UpperPulseText,
  MiddlePulseText,
  PulseWrapper,
  BottomPulseText,
} from "./styled";

interface TileProps {
  person: Task;
}

const PressureTile: React.FC<TileProps> = ({ person }) => {
  const getColorClass = useColorHook();
  const colorClass = getColorClass(person);

  return (
    <Tile>
      <Title>
        <TitleWrapper>
          <IconBlood>🩸</IconBlood> Blood Pressure
        </TitleWrapper>
      </Title>
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
        <MiddlePulseText>
          <div>❤️</div>
          <PulseWrapper>{person.pulse}</PulseWrapper>
        </MiddlePulseText>
        <BottomPulseText>BPM</BottomPulseText>
      </PulseResult>
      <Status className={colorClass}></Status>
    </Tile>
  );
};

export default PressureTile;
