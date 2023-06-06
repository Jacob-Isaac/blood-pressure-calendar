import { Div, Div1, Div2, Div3, Div4 } from "./styled";
import {ListHighest, ListAverage, ListLowest} from "../List/List";
import { Task } from "../../common/interfaces";
import { useSelector } from "react-redux/es/exports";
import { selectPressures } from "../Slice/Slice";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { showHighest, showAverage, showLowest } from "../Slice/Slice";
import {
  useCalculateAverage,
  useFindMaxUp,
  useFindMinUp,
} from "../../common/Hooks/summaryHooks";

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
      <Div4>
        <p>30-day termomether</p>4
      </Div4>
    </Div>
  );
};

export default Home;
