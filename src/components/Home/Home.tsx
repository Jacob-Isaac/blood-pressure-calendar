import { Div, Div1, Div2, Div3, Div4, StyledGlobe } from "./styled";
import { ListHighest, ListAverage, ListLowest } from "../List/List";
import { Task } from "../../common/interfaces";
import { useSelector, useDispatch } from "react-redux";
import { selectPressures, showHighest, showAverage, showLowest } from "../Slice/Slice";
import { useEffect, useState } from "react";
import {
  useCalculateAverage,
  useFindMaxUp,
  useFindMinUp,
} from "../../common/Hooks/summaryHooks";
import "react-calendar/dist/Calendar.css";


const Home = () => {
  const dispatch = useDispatch();
  const pressureList: Task[] = useSelector(selectPressures);
  const averageObj = useCalculateAverage(pressureList);
  const highestObj = useFindMaxUp(pressureList);
  const lowestObj = useFindMinUp(pressureList);
  

  useEffect(() => {
    if (highestObj) {
      dispatch(showHighest(highestObj));
    }
  }, [pressureList, dispatch]);

  useEffect(() => {
    if (averageObj) {
      dispatch(showAverage(averageObj));
    }
  }, [pressureList, dispatch]);

  useEffect(() => {
    if (lowestObj) {
      dispatch(showLowest(lowestObj));
    }
  }, [pressureList, dispatch]);

  const handleCalendarChange = (date: Date) => {
    onChange(date);
  };
  const [value, onChange] = useState<Date>(new Date());

  return (
    <Div>
      <h1>SUMMARY</h1>
      <Div1>
        30-day highest
        <ListHighest />
      </Div1>
      <Div2>
        30-day average
        <ListAverage />
      </Div2>
      <Div3>
        30-day lowest
        <ListLowest />
      </Div3>
      <Div4><StyledGlobe/></Div4>
    </Div>
  );
};

export default Home;