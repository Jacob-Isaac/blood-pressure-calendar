import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { Div } from "./styled";

const PressureCalendar = () => {
    const [value, onChange] = useState<Date>(new Date());
  return (
    <Div>
<Calendar value={value} />
</Div>
  );
};

export default PressureCalendar;


