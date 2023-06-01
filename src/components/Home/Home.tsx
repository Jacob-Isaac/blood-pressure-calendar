import {
  Div,
  Div1,
  Div2,
  Div3,
  Div4,
} from "./styled";
import ListHighest from "../List/ListHighest/ListHighest";
import List from "../List/List";
import { Task } from "../../common/interfaces";
import { useSelector } from "react-redux/es/exports";
import { selectPressures } from "../Slice/Slice";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { showHighest} from "../Slice/Slice";

const Home = () => {
  // HOOK - 30 days average

  // const data: Task[] = [   nasza tablica obiektów Task
  // ];
  
  // function calculateAverageUp(data: Task[]): number {
  //   const sumUp = data.reduce((sum, obj) => sum + obj.up, 0);    <-- nasz up w cisnieniu
  //   const averageUp = sumUp / data.length;
  //   return averageUp;
  // }
  
  // const averageUp = calculateAverageUp(data);
  // console.log("Średnia wartość parametru 'up':", averageUp);


  // HOOK - 30 day highest 

  // function findMaxUp(data: Task[]): number {
  //   const maxUp = Math.max(...data.map((obj) => obj.up));
  //   return maxUp;
  // }
  
  // const maxUp = findMaxUp(data);
  // console.log("Najwyższa wartość parametru 'up':", maxUp);

  // HOOK - 30 day lowest
  // function findMinUp(data: ObjectData[]): number {
  //   const minUp = Math.min(...data.map((obj) => obj.up));
  //   return minUp;
  // }
  
  // const minUp = findMinUp(data);
  // console.log("Najniższa wartość parametru 'up':", minUp);


// tworzymy nowy Task z nowymi danymi 

// function calculateAverage(data: ObjectData[]): ObjectData {
//   const totalObjects = data.length;
//   const totalUp = data.reduce((sum, obj) => sum + obj.up, 0);
//   const totalDown = data.reduce((sum, obj) => sum + obj.down, 0);
//   const totalPulse = data.reduce((sum, obj) => sum + obj.pulse, 0);

//   const averageUp = totalUp / totalObjects;
//   const averageDown = totalDown / totalObjects;
//   const averagePulse = totalPulse / totalObjects;

//   const newObject: ObjectData = {
//     id: "newId",
//     up: averageUp,
//     down: averageDown,
//     pulse: averagePulse,
//     note: "Average values",
//   };

//   return newObject;
// }

// const averageObject = calculateAverage(data);
// console.log("Nowy obiekt z wartościami średnimi:", averageObject);
function findMaxUp(data: Task[]): Task | undefined {
  const maxUp = Math.max(...data.map((obj) => obj.up));
  const objWithMaxUp = data.find((obj) => obj.up === maxUp);
  return objWithMaxUp || undefined;
}

const dispatch = useDispatch();
const pressureList: Task[] = useSelector(selectPressures);


useEffect(() => {
  const highestPressObj = findMaxUp(pressureList);
  if (highestPressObj) {
    console.log("Object with the highest 'up' parameter:", highestPressObj);
    dispatch(showHighest(highestPressObj));
  } else {
    console.log("No object with the highest 'up' parameter found.");
  }
}, [pressureList, dispatch]);

      return (       
    <Div>
      <h1>SUMMARY</h1>
      <Div1>30-day highest
      <ListHighest/>
      </Div1>
      <Div2><p>30-day average</p>2</Div2>
      <Div3><p>30-day lowest</p>3</Div3>
      <Div4><p>30-day termomether</p>4</Div4>
    </Div>
      );
    };

export default Home;